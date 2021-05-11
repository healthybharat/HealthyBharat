// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC2ZlpS694RpJAgh2fKjHSy9CUEZN5Tgmw",
  authDomain: "authentication-4303a.firebaseapp.com",
  projectId: "authentication-4303a",
  storageBucket: "authentication-4303a.appspot.com",
  messagingSenderId: "523639662276",
  appId: "1:523639662276:web:0b6d10a383370f1dfa4b91"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();

// var img = document.getElementById('img');
// let file = {}

// function chooseFile(e){
//   file = e.target.files[0];
// }

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var ref = firebase.database().ref('User/'+auth.currentUser.uid);
    ref.on('value', (snapshot) => {
      const data = snapshot.val();
      var username = data.name;
      var mail = data.email;
      var phonenum = data.phone;
      document.getElementById('profile_name').innerHTML = username;
      document.getElementById('profile_name1').innerHTML = username;
      document.getElementById('profile_email').innerHTML = mail;
      document.getElementById('profile_email1').innerHTML = mail;
      document.getElementById('profile_phone').innerHTML = phonenum;
      // updateStarCount(postElement, data);

    });
  }
})
