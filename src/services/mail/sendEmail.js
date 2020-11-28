/* using tcr-mail-utility hosted on heroku 

url: https://tcr-mail-utility.herokuapp.com/sendMail

endPoints: 

1. GET "/" returns Hello World (dummy URL)
2. POST "/sendMail" if(response.data.message=="Sent") ===> email sent successfully
                    else ===> some error occured (maybe Login issue with gmail id or wrong email id. was given) 
*/

import axios from 'axios'

async function sendEmail(email,data) {
    axios({
        method: 'post',
        url: 'https://tcr-mail-utility.herokuapp.com/sendMail',
        data: data
      }).then(function (response) {
        return response.data.message;
      })
      .catch(function (error) {
        return error;
    });
}

export {sendEmail}
