// General functions related to Firebase

// Import firebase product objects
import { auth } from './setup';
// Import helper functions
import { generatePassword, convertDec2CustomBase26 } from './helper';

/**
 * Create a new member account.
 * @param {string} first_name The first name of the user.
 * @param {string} last_name The last name or surname of the user.
 * @param {number} year_of_joining The year in which the user joined the organization.
 */
export async function addNewUser(first_name, last_name, year_of_joining){
    
    // Generate Email
    let emailDomain = '@tcr.in';
    let username = first_name + '.' + last_name + year_of_joining.toString();
    let email = username + emailDomain;
    let replicas = 0; // Counter for number of people with same username
    while ((await auth.fetchSignInMethodsForEmail(email)).length !== 0) {
        replicas++;
        var temp = convertDec2CustomBase26(replicas-1);
        email = username + temp + emailDomain;
    }
    // Generate Password
    let password = await generatePassword();
    // Create User
    auth.createUserWithEmailAndPassword(email, password)
    .then((currentUser) => {
        console.log(currentUser.user.uid);
        auth.signOut();
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode);
        console.error(errorMessage);
    });

};