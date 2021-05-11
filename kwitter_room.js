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

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
   function addRoom() 
   { 
       room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"
     }); 
     localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }
  function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); } getData(); function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; } function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location = "index.html"; }