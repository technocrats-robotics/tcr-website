// General functions related to Firebase

// Import firebase product objects
import { auth } from './setup';
// Import helper functions
import { generatePassword, convertDec2CustomBase26, titleCase } from './helper';
// Import Schema
import Member from './models/members/member';



/**
 * Create a new member account & return the status of the process, email & password.
 * @param {string} first_name The first name of the user.
 * @param {string} last_name The last name or surname of the user.
 * @param {string} registered_email A valid email that the user would like be contacted through.
 * @param {string} branch Branch/Department the user belongs to.
 * @param {number} year_of_joining The year in which the user joined the organization.
 */
export async function addNewUser(first_name, last_name, registered_email, branch, year_of_joining){
    
    // Generate Email
    let email_domain = '@tcr.in';
    let full_name = first_name + " " + last_name;
    first_name = first_name.replace(/ /g, "");  // Remove spaces
    last_name = last_name.replace(/ /g, "");    // Remove spaces
    let username = first_name + '.' + last_name + year_of_joining.toString();
    let email = username + email_domain;
    let replicas = 0; // Counter for number of people with same username
    while ((await auth.fetchSignInMethodsForEmail(email)).length !== 0) {
        replicas++;
        var temp = convertDec2CustomBase26(replicas-1);
        email = username + temp + email_domain;
    }
    // Generate Password
    let password = await generatePassword();
    // Create User
    return auth.createUserWithEmailAndPassword(email, password)
    .then(async (currentUser) => {
        // console.log(currentUser.user.uid);   // Debugging
        let newMember = new Member(currentUser.user.uid);
        let isCreated = await newMember.createMemberDocument(
            username.toLowerCase(),
            titleCase(full_name),
            registered_email.toLowerCase().replace(email_domain,''),
            titleCase(branch),
            year_of_joining
        );
        auth.signOut();
        console.log('Success'); // Debugging
        return {
            status: isCreated,
            username: email,
            password: password,
        };
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('Error in addNewUser');
        console.error(errorCode);
        console.error(errorMessage);
        return {status: false,};
    });

};

/**
 * References:
 * https://www.geeksforgeeks.org/how-to-remove-spaces-from-a-string-using-javascript/
 */