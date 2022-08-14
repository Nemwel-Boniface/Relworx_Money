const homePage = document.querySelector('.homePage');
const signinPage = document.querySelector(".signin");
const signUpPage = document.querySelector('.signup');

const homeBtn = document.querySelector('.home');
const signinBtn = document.querySelectorAll('.signInBtn');
const signUpBtn = document.querySelectorAll('.signUpBtn');

homeBtn.addEventListener('click', () => {
  homePage.classList.remove('hidden');
  signinPage.classList.add('hidden');
  signUpPage.classList.add('hidden');
})

const signInFunc = () => {
  homePage.classList.add('hidden');
  signinPage.classList.remove('hidden');
  signUpPage.classList.add('hidden');
}

const signUpFunc = () => {
  homePage.classList.add('hidden');
  signinPage.classList.add('hidden');
  signUpPage.classList.remove('hidden');
}

signinBtn.forEach(signin => {
  signin.addEventListener('click', signInFunc);
})

signUpBtn.forEach(signup => {
  signup.addEventListener('click', signUpFunc);
})

