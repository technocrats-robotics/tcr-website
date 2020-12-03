// Schema & methods for 'members' collection

import { db } from "../../setup";


class Member {
    /**
     * Constructor for the Member Class
     * @param {string} uid The user id provided by Firebase Auth
     */
    constructor(uid){
        this.collectionName = 'members';
        this.memberID = uid;
    }

    /**
     * Create a document in the 'members' collection for the newly added member
     * @param {string} username Dummy email/username created while account creation
     * @param {string} name Full name
     * @param {string} email Registered/Working email ID
     * @param {string} branch Branch/Department of the member
     * @param {number} year_of_joining The year in which the member joined
     * @param {boolean} isActive Is the member active & valid (default=true)
     * @param {boolean} blogAccess Should the member be allowed blog access (default=false)
     */
    async createMemberDocument(
        username, name, email, branch, year_of_joining,
        isActive=true,
        blogAccess=false,
    ){
        // Schema of the 'members' collection
        let memberDetails = {
            username: username,
            name: name,
            registeredEmail: email,
            branch: branch,
            yearOfJoining: year_of_joining,
            isActive: isActive,
            blogAccess: blogAccess,
            social_media: {
                linkedIn: null,
                instagram: null,
                github: null,
            },
            about: {
                experience: null,
                misc: null,
            }
        };
        // Add document to collection
        return db.collection(this.collectionName)
        .doc(this.memberID)
        .set(memberDetails)
        .then(() => true)
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Error in createMemberDocument in member.js")
            console.error(errorCode);
            console.error(errorMessage);
            return false;
        });
    };
}

export default Member;

/**
 * References:
 * https://www.w3schools.com/js/js_classes.asp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
 */