
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDSRPFVrC5t5hkifV5myKr1KM8uQLmo8Is",
      authDomain: "kwitter-bbe70.firebaseapp.com",
      databaseURL: "https://kwitter-bbe70-default-rtdb.firebaseio.com",
      projectId: "kwitter-bbe70",
      storageBucket: "kwitter-bbe70.appspot.com",
      messagingSenderId: "1058797710956",
      appId: "1:1058797710956:web:0f0e80395503b2c00af249"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
