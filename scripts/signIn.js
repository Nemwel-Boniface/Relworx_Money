// import generateAccountDetails from './modules/account.js';

// const accountSection = document.querySelector('.account');

const unique = document.querySelector('#unique');

const signinform = document.querySelector('.signinform');
const usermail = document.querySelector('.usermail');
const userPwd = document.querySelector('.userPwd');
const userSignInBTN = document.querySelector('.userSignInBTN');
const error = document.querySelector('.error');

const usrAccount = document.querySelector('.usrAccount');
const homePageAccount = document.querySelector('.homePage');
const signinPageAccount = document.querySelector(".signin");
const signUpPageAccount = document.querySelector('.signup');
// const mainp = document.querySelector('.mainP');

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

const genderImages = [
  {
    id: 1,
    genderImg: './images/maleAvatar.png'
  },
  {
    id: 2,
    genderImg: './images/femaleAvatar.png'
  }
]

const generateAccountDetails = (e) => {
  homePageAccount.classList.add('hidden');
  signinPageAccount.classList.add('hidden');
  signUpPageAccount.classList.add('hidden');
  usrAccount.classList.remove('hidden');
  // mainp.classList.add('hidden');
  unique.innerHTML = '';
  allLoadedUsers.forEach((accountUser) => {
    if(accountUser['id'] == e) {
      const profileHeader = document.createElement('div');
      profileHeader.classList.add('profileHeader');
      const profileImg = document.createElement('img');
      profileImg.src = accountUser.gender = 'male'? genderImages[0].genderImg: genderImages[1].genderImg;
      profileImg.alt = 'Profile avatar';

      const headerDetails = document.createElement('div');
      headerDetails.classList.add('headerDetails');

      const headerDetailsH2 = document.createElement('h2');
      headerDetailsH2.textContent = `${accountUser.firstName} ${accountUser.secondName}`;

      const headerDetailsemail = document.createElement('p');
      headerDetailsemail.textContent = accountUser.email;

      const headerDetailsphone = document.createElement('p');
      headerDetailsphone.textContent = accountUser.mobileNumber;

      headerDetails.append(headerDetailsH2, headerDetailsemail, headerDetailsphone);
      profileHeader.append(profileImg, headerDetails)

      const accountH3 = document.createElement('h3');
      accountH3.textContent = `Balance: ${accountUser.amount}`;

      const accountUL = document.createElement('ul');

      const accountulli1 = document.createElement('li');
      const accountulli1button1 = document.createElement('button');
      accountulli1button1.textContent = 'Top up money';
      const accountulli1button1I1 = document.createElement('i');
      accountulli1button1I1.classList.add('fa', 'fa-plus');

      accountulli1button1.appendChild(accountulli1button1I1);
      accountulli1.append(accountUser.role == 'admin'? accountulli1button1:'', accountulli1button1I1)


      const accountulli2 = document.createElement('li');
      const accountulli1button2 = document.createElement('button');
      accountulli1button2.textContent = 'Send Money';
      const accountulli1button1I2 = document.createElement('i');
      accountulli1button1I2.classList.add('fa', 'fa-paper-plane');
      
      accountulli1button2.appendChild(accountulli1button1I2);
      accountulli2.append(accountulli1button2, accountulli1button1I2)

      accountUL.append(accountulli1, accountulli2);

      unique.append(profileHeader, accountH3, accountUL)
    }
  })
}

const verifyUser = (mail, pwd) => {
  let usr = false;
  allLoadedUsers.forEach((user) => {
    if(user["email"] == mail && user["password"] == pwd) {
      usr = true;
      user["loggedIn"] = true
      signinform.reset();
      generateAccountDetails(user['id'])
      // location.href = '/account.html';
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
