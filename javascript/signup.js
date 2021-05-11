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

//const auth = firebase.auth();
var database = firebase.database();

function SignUp(){
    var name = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var match = /^\d{10}$/;

    if(password == password2 && phone.match(match)) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
            database.ref('User/'+firebase.auth().currentUser.uid).set({
                email:email,
                password:password,
                name: name,
                phone:phone,
            });
            setTimeout(function(){
                // LogOut();
                document.getElementById('success').style.display='block';
             }, 4000);
            }).catch((error) => {
                console.log(error);
                alert(error.message);
            });

    }
    else{
        alert("password didnt match");
        document.querySelector('.form_container').reset();
    }
}

function LogOut(){
    firebase.auth().signOut();
}

function success(){
    LogOut();
    window.location.href = "../index.html";
}
