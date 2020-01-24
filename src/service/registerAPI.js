import axios from 'react-native-axios';

const registerApi = user => {
  return new Promise((resolve, reject) => {
    axios
      .post('http://192.168.1.23:3000/students/new', {
        StudenNo: user.studentNumber,
        name: user.name,
        surName: user.surName,
        password: user.password,
        mail: user.mail,
        phoneNumber: user.phoneNumber,
      })
      .then(function(response) {
        if (response.data.status === true) resolve();
        if (response.data.unique === 'studentNo')
          reject('Bu öğrenci numarası daha önce kullanılmış !');
        if (response.data.unique === 'mail')
          reject('Bu mail daha önceden kullanılmış !');
      })
      .catch(function(error) {
        reject('Servis bağlantı hatası !');
      });
  });
};

module.exports = registerApi;
