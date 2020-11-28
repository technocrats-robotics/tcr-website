import axios from 'axios'

const sendMessage=(data)=>{
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

module.exports.sendMessage