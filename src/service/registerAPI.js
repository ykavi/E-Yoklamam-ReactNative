const registerApi = user => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.name === 'kavi') resolve();
      else reject('bir hata olıştu');
    }, 5000);
  });
};

export default registerApi;
