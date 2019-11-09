import axios from 'axios';

axios
  .get(
    'https://script.google.com/a/ph2.us/macros/s/AKfycbwMfUqO46uBD_F_8NUfDgYRhFXbxTFokWp5GghJag/exec?token=K1MjRygIqCFtFXiW9vbu&action=positions'
  )
  .then(response => {
    console.log(response.data); /* ?+ */
  });
