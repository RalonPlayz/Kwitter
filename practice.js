// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDzZDvWsn1UXXc1aFaWZ5EtDQtEObx_1ns",
    authDomain: "kwitter-d7dac.firebaseapp.com",
    databaseURL: "https://kwitter-d7dac-default-rtdb.firebaseio.com",
    projectId: "kwitter-d7dac",
    storageBucket: "kwitter-d7dac.appspot.com",
    messagingSenderId: "1010322622320",
    appId: "1:1010322622320:web:1c73470c042d1f0f5b71b5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    

}