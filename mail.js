const firebaseConfig = {
  apiKey: "AIzaSyCQCcHazyGgzqMmPMfNbbuZ89E8uHTtEQQ",
  authDomain: "webapp-22688.firebaseapp.com",
  databaseURL: "https://webapp-22688-default-rtdb.firebaseio.com",
  projectId: "webapp-22688",
  storageBucket: "webapp-22688.appspot.com",
  messagingSenderId: "199266400813",
  appId: "1:199266400813:web:ddc9c4199bb5a1f87e16a4",
  measurementId: "G-04SM1TLYE0"
};

firebase.initializeApp(firebaseConfig);

var loginDB=firebase.database().ref('webapp')

document.getElementById('registration').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var email = getElementVal('email1');
  var password = getElementVal('password1');
  var confirm_password = getElementVal('confirm_password1');

  saveMessage(email, password,confirm_password);
}

const saveMessage = (email,password,confirm_password) => {
  var newLogin = loginDB.push();
  newLogin.set({
    email : email,
    password : password,
    confirm_password : confirm_password
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};