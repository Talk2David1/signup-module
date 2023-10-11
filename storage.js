export const signUp = (fullName, username, password) => {
    const userData = { fullName, username, password };
    saveUserToLocalStorage(userData);
    return userData;
  };

  export const saveUserToLocalStorage = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
  };
  

  // use the module bellow if you want to retrieve data from localStorage
  // export const getUserFromLocalStorage = () => {
  //   const userData = localStorage.getItem('userData');
  //   return userData ? JSON.parse(userData) : null;
  // };