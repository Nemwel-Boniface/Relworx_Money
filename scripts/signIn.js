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

const topupFormWrapper = document.querySelector('.topup');
const sendMoneyWrapper = document.querySelector('.sendMoney');

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


const saveAmout = (e) => {
  localStorage.setItem('RelworxUser', JSON.stringify(e));
}

const saveNewUserAmount = (amount, e) => {
  
  allLoadedUsers.forEach((loadedUser) => {
    if(loadedUser["firstName"] == e) {
      loadedUser.amount = amount;
    }
  })
  saveAmout(allLoadedUsers);
}

const updateUserAmount = (amount, receiver) => {
  allLoadedUsers.forEach((userToAdd) => {
    if(userToAdd["firstName"] == receiver) {
      let old = Number(userToAdd["amount"]);
      let toBeAddAmount = Number(amount)
      let newAmount = old + toBeAddAmount;
      saveNewUserAmount(newAmount, receiver);
    }
  })
}

const implementSendMoney = (e, transferAmount, transferRecepient) => {
  let NumtransferAmount = Number(transferAmount);
  allLoadedUsers.forEach((moneySender) => {
    if(moneySender['id'] == e) {
      let mymoney = Number(moneySender['amount'])
      let subtractedValue = mymoney - NumtransferAmount;
      moneySender['amount'] = subtractedValue;
    }
  })
  saveAmout(allLoadedUsers);  

  allLoadedUsers.forEach((moneyReceiver) => {
    if(moneyReceiver['firstName'] == transferRecepient) {
      let newMoney = Number(moneyReceiver['amount']);
      let added = newMoney + NumtransferAmount;
      moneyReceiver['amount'] = added; 
    }
  })
  saveAmout(allLoadedUsers);
}

const hideMenu = () => {
  topupFormWrapper.style.display = 'none';
  sendMoneyWrapper.style.display = 'none';
}

const generateSendMoneyForm = (e) => {
  sendMoneyWrapper.style.display = 'block';
  const sendMonwyWrap = document.createElement('div');
  sendMonwyWrap.classList.add('sendMonwyWrap');
  
  const sendMneyHeader = document.createElement('div');
  sendMneyHeader.classList.add('sendMneyHeader');

  const sendMneyHeaderH2 = document.createElement('h2');
  sendMneyHeaderH2.textContent = 'Relworxs facilitates your money transfers seemlessly';

  const sendMneyHeaderButton = document.createElement('button');
  sendMneyHeaderButton.classList.add('closentn');
  sendMneyHeaderButton.textContent = 'X';

  sendMneyHeaderButton.addEventListener('click', () => {
    hideMenu();
  })

  sendMneyHeader.append(sendMneyHeaderH2, sendMneyHeaderButton);

  const sendDataForm = document.createElement('form');
  sendDataForm.classList.add('form');

  const sendDataFormInput = document.createElement('input');
  sendDataFormInput.placeholder = 'Amount that you wish to transfer';
  sendDataFormInput.type = 'number';
  sendDataFormInput.required = true;

  const sendDataFormLabel = document.createElement('label');
  sendDataFormLabel.htmlFor = 'recepient';
  sendDataFormLabel.textContent = 'Select your recepient:';

  const sendDataFormSelect = document.createElement('select');
  sendDataFormSelect.classList.add('recepient');
  sendDataFormSelect.name = 'recepient';

  allLoadedUsers.forEach((userTOsend) => { 
    let sendDataFormOption = document.createElement('option');
    sendDataFormOption.value = userTOsend['firstName'];
    sendDataFormOption.text = userTOsend['firstName'];
    sendDataFormSelect.appendChild(sendDataFormOption);
  })

  const sendDataFormButton = document.createElement('button');
  sendDataFormButton.type = 'submit';
  sendDataFormButton.textContent = 'Send'

  sendDataFormButton.addEventListener('click', () => {
    implementSendMoney(e, sendDataFormInput.value, sendDataFormSelect.value)
  })

  sendDataForm.append(sendDataFormInput, sendDataFormLabel, sendDataFormSelect, sendDataFormButton);

  sendMonwyWrap.append(sendMneyHeader, sendDataForm);

  sendMoneyWrapper.appendChild(sendMonwyWrap);
}

const generateTopUpForm = (e) => {
  topupFormWrapper.style.display = 'block';
  const topupmoney = document.createElement('div');
  topupmoney.classList.add('topupmoney');

  const topupHeader = document.createElement('div');
  topupHeader.classList.add('topupHeader');

  const topupHeaderH2 = document.createElement('h2');
  topupHeaderH2.textContent = 'Relworx Top Up money';

  const topupHeaderButton = document.createElement('button');
  topupHeaderButton.classList.add('closebtn');
  topupHeaderButton.textContent = 'X';

  topupHeaderButton.addEventListener('click', () => {
    hideMenu();
  })

  topupHeader.append(topupHeaderH2, topupHeaderButton);

  const topupForm = document.createElement('form');
  topupForm.classList.add('topupForm');

  const topupFormInput = document.createElement('input');
  topupFormInput.type = 'number';
  topupFormInput.placeholder = 'Enter amount to topup';
  topupFormInput.required = true;

  const topupFormLabel = document.createElement('label');
  topupFormLabel.htmlFor = 'recepient';
  topupFormLabel.textContent = 'Select your recepient:';

  const topupFormSelect = document.createElement('select');
  topupFormSelect.classList.add('recepient');
  topupFormSelect.name = 'recepient';

  allLoadedUsers.forEach((userTOsend) => { 
    let topupFormOption = document.createElement('option');
    topupFormOption.value = userTOsend['firstName'];
    topupFormOption.text = userTOsend['firstName'];
    topupFormSelect.appendChild(topupFormOption);
  })

  const topupFormButton = document.createElement('button');
  topupFormButton.type = 'submit';
  topupFormButton.textContent = 'Top Up';

  topupFormButton.addEventListener('click', (k) => {
    k.preventDefault()
    updateUserAmount(topupFormInput.value, topupFormSelect.value);
  })

  topupForm.append(topupFormInput, topupFormLabel, topupFormSelect, topupFormButton);

  topupmoney.append(topupHeader, topupForm);

  topupFormWrapper.append(topupmoney)
}

const generateAccountDetails = (e) => {
  homePageAccount.classList.add('hidden');
  signinPageAccount.classList.add('hidden');
  signUpPageAccount.classList.add('hidden');
  usrAccount.classList.remove('hidden');
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

      accountulli1button1.addEventListener('click', () => {
        generateTopUpForm(accountUser.id);
      })

      accountulli1button1.appendChild(accountulli1button1I1);
      accountulli1.append(accountUser.role == 'admin'? accountulli1button1:'', accountulli1button1I1)


      const accountulli2 = document.createElement('li');
      const accountulli1button2 = document.createElement('button');
      accountulli1button2.textContent = 'Send Money';
      const accountulli1button1I2 = document.createElement('i');
      accountulli1button1I2.classList.add('fa', 'fa-paper-plane');
      
      accountulli1button2.addEventListener('click', () => {
        generateSendMoneyForm(e)
      })

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
