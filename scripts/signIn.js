const signinform = document.querySelector('.signinform');
const usermail = document.querySelector('.usermail').value;
const userPwd = document.querySelector('.userPwd').value;
const userSignInBTN = document.querySelector('.userSignInBTN');

const RelworkxUsers = [];

const getUsersFromLocalStorage = () => {
  if(localStorage.getItem('RelworxUser')) {
    users = JSON.parse(localStorage.getItem('RelworxUser'));
  }

  users.forEach((user) => {
    RelworkxUsers.push(user);
  })
  
  return RelworkxUsers;
}

window.addEventListener('DOMContentLoaded', () => {
  getUsersFromLocalStorage();
})