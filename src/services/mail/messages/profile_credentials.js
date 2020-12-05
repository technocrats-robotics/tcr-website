/*
function to generate unique profile credentials for users
*/

const profile_credentials = (name,department,yoj)=>{
    return (
        ` Profile redentials
         {name} {email} {yoj}
        `
    )
}

module.exports.profile_credentials