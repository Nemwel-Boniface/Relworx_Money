const userFirstName = document.querySelector('.firstName');
const userlastName = document.querySelector('.lastName');
const mobileNo = document.querySelector('.mobileNo');
const useremail = document.querySelector('.email');
const usergender = document.querySelector('.gender');
const userpassword = document.querySelector('.password');
const newUser = document.querySelector('.newUser');
const signUpform = document.querySelector('.signUpform');
const success = document.querySelector('.success');

let users = [];

const admin = [
  {
    id: 1,
    firstName: "Nemwel",
    secondName: "Boniface",
    role: "admin",
    mobileNumber: 727475518,
    gender: "male",
    loggedIn: false,
    email: "nemwelboniface@outlook.com",
    password: "nemwel123",
    amount: 5000
  }
]

const addAdminToLocalStorage = () => {
  localStorage.setItem('RelworxUser', JSON.stringify(admin));
}

const AddToLocalStorage = () => {
  localStorage.setItem('RelworxUser', JSON.stringify(users));
}

const addANewUser = () => {
  const usersCount = users.length;

  users.push({
    id: usersCount + 1,
    firstName: userFirstName.value,
    secondName: userlastName.value,
    role: "user",
    mobileNumber: mobileNo.value,
    gender: usergender.value,
    loggedIn: false,
    email: useremail.value,
    password: userpassword.value,
    amount: 1000
  })
  AddToLocalStorage(users);
  getFromLocalStorage()
  signUpform.reset();
  success.innerHTML = `Account was created succesfully. Kindly refresh to update the database and click on sign in to login to your account. Ksh 1000 was deposited to your account. Welcome to Relworx!`;
}

newUser.addEventListener('click', () => {
  addANewUser();
})

const getFromLocalStorage = () => {
  if(localStorage.getItem('RelworxUser')) {
    relworksusers = JSON.parse(localStorage.getItem('RelworxUser'));
  }

  relworksusers.forEach((user) => {
    users.push(user);
  })
  
  return users;
}

window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('RelworxUser')) {
    addAdminToLocalStorage()
  }

  getFromLocalStorage();
})