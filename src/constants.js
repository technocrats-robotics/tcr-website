export var admin_email = 'the.mortal.god@tcr.in';

/**
 * Get the team year in string
 * 
 * For instance: If the year is 2020 & the month is later than February,
 * that implies that the team now is preparing for an event in 2021. 
 * So, the current team year should be 2021. 
 * Similarly, if the month is now is January or February & the year is 2020, 
 * that implies the team is about to participate for an event in 2020.
 * So, the current team year should be 2020.
 * @returns string
 * @note The month taken here is 2, because power transfer generally happens
 * in the month of February, after which the new recruits are let in.
 */
export var getCurrentTeamYear = () => {
    let time = new Date();
    return (time.getMonth() > 2) ? 
        (time.getFullYear()+1).toString(): 
        time.getFullYear().toString();
}

/**
 * Faculty Coordinator Details
 */
export var faculty_details = {
    username: 'dr.arockia.selvakumar2013',
    dpLink: null,
    name: 'Dr. Arockia Selvakumar',
    yearOfJoining: 2013,
    isActive: true,
    blogAccess: false,
    currentRole: 'Faculty',
    branch: 'Coordinator',
    social_media: {
        linkedIn: null,
        instagram: null,
        github: null,
    },
    about: {
        experience: null,
        misc: 'Faculty Coordinator',
    }
};