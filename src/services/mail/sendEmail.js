import axios from "axios";


axios({
    method: 'post',
    url: 'http://localhost:5000/',
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