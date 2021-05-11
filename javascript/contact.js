// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyByZsp-Fi3udBOZE3RAtzgUoM0fLEB6b1w",
    authDomain: "contact-details-266fd.firebaseapp.com",
    projectId: "contact-details-266fd",
    storageBucket: "contact-details-266fd.appspot.com",
    messagingSenderId: "235560110837",
    appId: "1:235560110837:web:3dfbbcf7352bcefab453bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //referencing the collection

let contactInfo = firebase.database().ref("information");

//listen for submit
document.querySelector(".form_container2").addEventListener("submit",submitForm);


function submitForm(e) {
    e.preventDefault();

    //fetching the input values
    let fname = document.querySelector(".fname").value;
    let lname = document.querySelector(".lname").value;
    let email = document.querySelector(".mail").value;
    let number = document.querySelector(".phoneno").value;
    let country = document.querySelector(".country").value;
    let message = document.querySelector(".subject").value;
    var match = /^\d{10}$/;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email.match(mailformat) && number.match(match)){
      saveInformation(fname, lname, email, number, country, message);
    }
    else{
      alert("invalid credentials");
    }
    sendEmail(fname, lname, email, number, country, message);

    document.querySelector(".form_container2").reset();

}

//save the information to firebase

function saveInformation(fname, lname, email, number, country, message) {
    let newinformation = contactInfo.push();

    newinformation.set({
        fname: fname,
        lname: lname,
        email: email,
        number: number,
        country: country,
        message: message,
    });

    retrieveInformation();
}

//retrieve information
function retrieveInformation(){
    let ref = firebase.database().ref("information");
    ref.on("value", gotData);
}

function gotData(data) {
    let infor = data.val();
    let keys = Object.keys(infor);

    for(let i = 0;i < keys.length; i++){
        let infdata = keys[i];
        let fname = infor[infdata].fname;
        let lname = infor[infdata].lname;
        let email = infor[infdata].email;
        let number = infor[infdata].number;
        let country = infor[infdata].country;
        let message = infor[infdata].message;

        console.log(fname, lname, email, number, country, message);
    }
}

//Sending email
function sendEmail(fname, lname, email, number, country, message) {
    Email.send({
       Host: "smtp.gmail.com",
       Username: 'healthybharatinfo@gmail.com',
       Password: "Healthybharat",
       To: 'healthybharatinfo@gmail.com',
       From: 'healthybharatinfo@gmail.com',
       Subject: `${fname} has raised a complaint`,
       Body: `Name🙂  ${fname} <br> Email📧  ${email} <br> Message📔  ${message}`,
    }).then( message => alert("mail sent successfully"));
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
     }
   }).catch(function(error) {
     console.error(error);
   });
  } else {
    // No user is signed in.
  }
});
