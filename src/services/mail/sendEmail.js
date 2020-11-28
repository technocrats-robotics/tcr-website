import axios from "axios";

axios({
    method: 'post',
    url: 'https://tcr-mail-utility.herokuapp.com/',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
});