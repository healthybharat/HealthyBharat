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

var database = firebase.database();

function resetPassword(){
    var email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email).then((res) => {
       // Email sent.
        alert('A link has sent to your registered mail');
        window.location.href = '../index.html';
      }).catch((error) => {
        console.log(error);// An error happened.
      });
}
