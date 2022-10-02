/* using tcr-mail-utility hosted on heroku 

url: https://quiet-caverns-98688.herokuapp.com/sendMail
   : https://quiet-caverns-98688.herokuapp.com/sendFeedback

endPoints: 

1. GET "/" returns Hello World (dummy URL)
2. POST "/sendMail" if(response.data.message=="Sent") ===> email sent successfully
                    else ===> some error occured (maybe Login issue with gmail id or wrong email id. was given)
3. POST "/sendFeedback" if(response.data.message=="Sent") ===> email sent successfully
                    else ===> some error occured (maybe Login issue with gmail id or wrong email id. was given)
*/

import axios from "axios";

import { API_TOKEN } from "../../constants";

async function sendEmail(email, data) {
  let token = API_TOKEN;
  return axios
    .post(
      "https://quiet-caverns-98688.herokuapp.com/sendMail",
      {
        email: email,
        data: data,
      },
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      // console.log("Response",response);
      return response.data.message;
    })
    .catch(function (error) {
      console.error("Error occured in sendEmail");
      console.error(error.code);
      console.error(error.message);
      return false;
    });
}

async function sendFeedback(data) {
  let token = API_TOKEN;
  return axios
    .post(
      "https://quiet-caverns-98688.herokuapp.com/sendFeedback",
      {
        data: data,
      },
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      // console.log("Response",response);
      return response.data.message;
    })
    .catch(function (error) {
      console.error("Error occured in sendEmail");
      console.error(error.code);
      console.error(error.message);
      return false;
    });
}

export { sendEmail, sendFeedback };
