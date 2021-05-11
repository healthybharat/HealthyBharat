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
//var username;
var database = firebase.database();
var username;
function login(){
  var email = document.getElementById("emailid").value;
  var password = document.getElementById("password-field").value;
  auth.signInWithEmailAndPassword(email, password).then(res => {
    //return auth.currentUser.name;
    firebase.database().ref('User/'+auth.currentUser.uid).get().then(function(snapshot) {
      if (snapshot.exists()) {
        username = snapshot.val()['name'];
        document.getElementById('login').style.display = 'none';
        document.getElementById('menuflow').style.display = 'block';
        document.getElementById('user_name').innerHTML = username;

      }
    }).catch(function(error) {
      console.error(error);
    });
  }).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      document.getElementById('error_message1').style.display = 'block';
    }
  });
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     //alert(email + 'already in use');
     firebase.database().ref('User/'+auth.currentUser.uid).get().then(function(snapshot) {
       if (snapshot.exists()) {
         username = snapshot.val()['name'];
         document.getElementById('login').style.display = 'none';
         document.getElementById('menuflow').style.display = 'block';
         document.getElementById('user_name').innerHTML = username;
         document.getElementById('login_mob').style.display = 'none';
         document.getElementById('username_mob').style.display = 'block';
         document.getElementById('username_mob').innerHTML = username;
       }
     }).catch(function(error) {
       console.error(error);
     });
    } else {
      // No user is signed in.
      document.getElementById('login').style.display = 'block';
      document.getElementById('menuflow').style.display = 'none';
      document.getElementById('login_mob').style.display = 'block';
      document.getElementById('username_mob').style.display = 'none';
      document.getElementById('drop_down').style.display = 'none';

    }
  });

function LogOut(){
    firebase.auth().signOut();
    alert("logged Out");
}

function checkout_index(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var amount = document.getElementById('total_price').innerHTML;
      sessionStorage.setItem("amount", amount);
      // console.log(amount);
      if(amount!=0){
        window.open("./subfiles/payment.html",'_blank');
        // document.getElementById('cart').style.display = 'none';
        // document.getElementById('id01').style.display = 'block';
      }
      else{
        alert('cart is empty');
      }
    } else {
      // No user is signed in.
      document.getElementById('cart').style.display = 'none';
      document.getElementById('id01').style.display = 'block';
    }
  });
}

function checkout(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var amount = document.getElementById('total_price').innerHTML;
      sessionStorage.setItem("amount", amount);
      if(amount!=0){
        window.open('./payment.html','_blank');
        // document.getElementById('cart').style.display = 'none';
        // document.getElementById('id01').style.display = 'block';
      // window.location.href("./payment.html","_blank");
      }
      else {
        alert('cart is empty');
      }
      // window.open('http://www.google.com','_blank');
      // // window.location.href("./payment.html","_blank");
    } else {
      // No user is signed in.
      document.getElementById('id01').style.display = 'block';
      document.getElementById('cart').style.display = 'none';
    }
  });
}

 function checkout_mob(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var amount = document.getElementById('total_price').innerHTML;
      sessionStorage.setItem("amount", amount);
      if(amount!=0){
        window.open('./payment.html','_blank');
      }
      else {
        alert('cart is empty');
      }
    } else {
      // No user is signed in.
        alert('please login first');
        window.location.href = './organic_products.html';
    }
  });
}


//function call that submits the data to the database from contact form
function Submit(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    var fname = document.querySelector(".fname").value;
    var lname = document.querySelector(".lname").value;
    var email = document.querySelector(".mail").value;
    var number = document.querySelector(".phoneno").value;
    var country = document.querySelector(".country").value;
    var message = document.querySelector(".subject").value;
    var match = /^\d{10}$/;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //verifying whether all the fields data is entered or not
    if (fname.length!=0 && lname.length!=0 && email.length!=0 && number.length!=0 && message.length!=0) {
      //condition to check the phonenumber is 10 digit long
      if(number.match(match) && email.match(mailformat)){
        database.ref('Contact-Form-Information/'+firebase.auth().currentUser.uid).set({
          fname:fname,
          lname:lname,
          email:email,
          number:number,
          country:country,
          message:message,
        })
        //message that data is submitted to database
        alert('Your message was successfully submitted🙂');
        document.querySelector(".form_container2").reset();
      }
      else{
        alert('Enter a valid phonenumber 📱📲');
      }
    }else {
      alert('Please enter data in all the fields 😝🧠');
    }
  }
  //alerts the user about login/signup
  else {
    alert('Please login/signup 😧');
  }
});
}
