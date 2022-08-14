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
    password: "nemwel123"
  }
]

const addAdminToLocalStorage = () => {
  localStorage.setItem('RelworxUser', JSON.stringify(admin));
}

window.addEventListener('load', () => {
  if (!localStorage.getItem('RelworxUser')) {
    addAdminToLocalStorage()
  }
})