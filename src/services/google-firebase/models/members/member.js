// Schema & methods for 'members' collection

import { db, admin_db, admin_auth } from "../../setup";
import Role from "./role";

class Member {
  static collectionName = "members";
  static totalYearsOfService = 4;
  /**
   * Constructor for the Member Class
   * @param {string} uid The user id provided by Firebase Auth
   */
  constructor(uid) {
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
    username,
    name,
    email,
    branch,
    year_of_joining,
    isActive = true,
    blogAccess = false
  ) {
    // Schema of the 'members' collection
    let memberDetails = {
      username: username,
      dpLink: null,
      name: name,
      registeredEmail: email,
      branch: branch,
      roles: {
        [year_of_joining + 1]: Role.MEMBER,
        [year_of_joining + 2]: Role.MEMBER,
        [year_of_joining + 3]: Role.ALUMNI,
        [year_of_joining + 4]: Role.ALUMNI,
      },
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
      },
    };
    // Add document to collection
    return admin_db
      .collection(Member.collectionName)
      .doc(this.memberID)
      .set(memberDetails)
      .then(() => true)
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Error in createMemberDocument in member.js");
        console.error(errorCode);
        console.error(errorMessage);
        return false;
      });
  }

  /**
   * Updates the field value of the given field in the document
   * @param {string} field_name The exact name field that needs to altered
   * @param {any} field_data The data that needs to be placed
   * @returns
   * Promise representing the status of the process in boolean
   * @example
   * let updateStatus = await updateMemberDetail('blogAccess', true);
   * let updateStatus = await updateMemberDetail('about.experience', 'Excelsior!');
   */
  async updateMemberDetail(field_name, field_data) {
    var firestore_db = admin_auth != null ? admin_db : db;
    return firestore_db
      .collection(Member.collectionName)
      .doc(this.memberID)
      .update({ [field_name]: field_data })
      .then(() => true)
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Error in updateMemberDetail in member.js");
        console.error(errorCode);
        console.error(errorMessage);
        return false;
      });
  }

  /**
   * Analyse/Deduce the exact current role of the member
   * @param {object} yearly_roles An object/map with key: year(number) & value:Role(string)
   * @returns array with first element representing the team year
   * & the second element representing the current role of the member
   */
  static getCurrentRole(yearly_roles) {
    let currentDate = new Date(); // Get the current Date
    // Get the last year of service for the member
    let last_year_of_service =
      Object.keys(yearly_roles)[this.totalYearsOfService - 1];
    /**
     * Check if
     * current year is not greater than the last year of service &
     * the current month is not ahead of February (coz Power transfer generally happens in Feb)
     * Easter Egg:
     * If you are a Junior who is reading this, now you know that
     * Power transfer generally happens in the month of Feb :)
     */
    if (currentDate.getFullYear() < last_year_of_service) {
      if (currentDate.getMonth() <= 2)
        return [
          currentDate.getFullYear(),
          yearly_roles[currentDate.getFullYear()],
        ];
      else
        return [
          currentDate.getFullYear() + 1,
          yearly_roles[currentDate.getFullYear() + 1],
        ];
    } else return [last_year_of_service, yearly_roles[last_year_of_service]];
  }
}

export default Member;

/**
 * References:
 * https://www.w3schools.com/js/js_classes.asp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
 */
