const signinform = document.querySelector('.signinform');
const usermail = document.querySelector('.usermail');
const userPwd = document.querySelector('.userPwd');
const userSignInBTN = document.querySelector('.userSignInBTN');
const error = document.querySelector('.error');

let retrievedusers = [];

const getUsersFromLocalStorage = () => {
  let RelworkxUsers = [];

  if(localStorage.getItem('RelworxUser')) {
    retrievedusers = JSON.parse(localStorage.getItem('RelworxUser'));
  }

  retrievedusers.forEach((user) => {
    RelworkxUsers.push(user);
  })
  
  return RelworkxUsers;
}

let allLoadedUsers = getUsersFromLocalStorage();

const verifyUser = (mail, pwd) => {
  let usr = false;
  allLoadedUsers.forEach((user) => {
    if(user["email"] == mail && user["password"] == pwd) {
      usr = true;
      user["loggedIn"] = true
      signinform.reset();
      location.href = '/account.html';
    }
  })
  if(usr == false) {
    error.innerHTML = `User with email ${mail} does not exist!`;
  }
}

signinform.addEventListener('submit', (e) => {
  e.preventDefault();
  verifyUser(usermail.value, userPwd.value);
})

window.addEventListener('DOMContentLoaded', () => {
  getUsersFromLocalStorage();
})
