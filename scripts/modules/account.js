// // const unique = document.querySelector('.account');
// const unique = document.getElementById('unique');

// let accountAllUsers = [];

// const genderImages = [
//   {
//     id: 1,
//     genderImg: './images/maleAvatar.png'
//   },
//   {
//     id: 2,
//     genderImg: './images/femaleAvatar.png'
//   }
// ]

// const getUsersFromLocalStorage = () => {
//   let RelworxAccountUsers = [];

//   if(localStorage.getItem('RelworxUser')) {
//     accountAllUsers = JSON.parse(localStorage.getItem('RelworxUser'));
//   }

//   accountAllUsers.forEach((user) => {
//     RelworxAccountUsers.push(user);
//   })
  
//   return RelworxAccountUsers;
// }

// let allLoadedAccountUsers = getUsersFromLocalStorage();

// const generateAccountDetails = (e) => {
//   unique.innerHTML = '';
//   allLoadedAccountUsers.forEach((accountUser) => {
//     if(accountUser['id'] == e) {
//       const profileHeader = document.createElement('div');
//       profileHeader.classList.add('profileHeader');
//       const profileImg = document.createElement('img');
//       profileImg.src = accountUser.gender = 'male'? genderImages[0].genderImg: genderImages[1].genderImg;
//       profileImg.alt = 'Profile avatar';

//       const headerDetails = document.createElement('div');
//       headerDetails.classList.add('headerDetails');

//       const headerDetailsH2 = document.createElement('h2');
//       headerDetailsH2.textContent = `${accountUser.firstName} ${accountUser.secondName}`;

//       const headerDetailsemail = document.createElement('p');
//       headerDetailsemail.textContent = accountUser.email;

//       const headerDetailsphone = document.createElement('p');
//       headerDetailsphone.textContent = accountUser.mobileNumber;

//       headerDetails.append(headerDetailsH2, headerDetailsemail, headerDetailsphone);
//       profileHeader.append(profileImg, headerDetails)

//       const accountH3 = document.createElement('h3');
//       accountH3.textContent = accountUser.amount;

//       const accountUL = document.createElement('ul');

//       const accountulli1 = document.createElement('li');
//       const accountulli1button1 = document.createElement('button');
//       accountulli1button1.textContent = 'Top up money';
//       const accountulli1button1I1 = document.createElement('i');
//       accountulli1button1I1.classList.add('fa', 'fa-plus');

//       accountulli1button1.appendChild(accountulli1button1I1);
//       accountulli1.append(accountulli1button1, accountulli1button1I1)


//       const accountulli2 = document.createElement('li');
//       const accountulli1button2 = document.createElement('button');
//       accountulli1button2.textContent = 'Send Money';
//       const accountulli1button1I2 = document.createElement('i');
//       accountulli1button1I2.classList.add('fa', 'fa-paper-plane');
      
//       accountulli1button2.appendChild(accountulli1button1I2);
//       accountulli2.append(accountulli1button2, accountulli1button1I2)

//       accountUL.append(accountulli1, accountulli2);

//       unique.append(profileHeader, accountH3, accountUL)
//     }
//   })
// }

// export default generateAccountDetails;


