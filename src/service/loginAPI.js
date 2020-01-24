import axios from 'react-native-axios';

const loginApi = user => {
  return new Promise((resolve, reject) => {
    axios
      .post('http://192.168.1.23:3000/students/isStudent', {
        studenNo: user.username,
        password: user.password,
      })
      .then(function(response) {
        if (response.data.status === true) resolve();
        if (response.data.status === false)
          reject('Böyle bir kayıt bulunamadı !');
      })
      .catch(function(error) {
        reject('Servis bağlantı hatası !');
      });
  });
};

module.exports = loginApi;
