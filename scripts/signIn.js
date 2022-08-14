const signinform = document.querySelector('.signinform');
const usermail = document.querySelector('.usermail').value;
const userPwd = document.querySelector('.userPwd').value;
const userSignInBTN = document.querySelector('.userSignInBTN');
const error = document.querySelector('.error');

const RelworkxUsers = [];

console.log(RelworkxUsers)

const getUsersFromLocalStorage = () => {
  if(localStorage.getItem('RelworxUser')) {
    users = JSON.parse(localStorage.getItem('RelworxUser'));
  }

  users.forEach((user) => {
    RelworkxUsers.push(user);
  })
  
  return RelworkxUsers;
}

const verifyUser = (email, pwd) => {
  RelworkxUsers.forEach((user) => {
    if(user.email == email && user.password == pwd) {
      RelworkxUsers[user].loggedIn = true
      signinform.reset();
    } else {
      error.innerHTML = `User with email ${usermail} does not exist!`;
    }
  })
}

userSignInBTN.addEventListener('click', () => {
  verifyUser(usermail, userPwd);
})

window.addEventListener('DOMContentLoaded', () => {
  getUsersFromLocalStorage();
})