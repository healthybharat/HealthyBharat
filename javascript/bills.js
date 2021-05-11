// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyByZsp-Fi3udBOZE3RAtzgUoM0fLEB6b1w",
authDomain: "contact-details-266fd.firebaseapp.com",
databaseURL: "https://contact-details-266fd-default-rtdb.firebaseio.com",
projectId: "contact-details-266fd",
storageBucket: "contact-details-266fd.appspot.com",
messagingSenderId: "235560110837",
appId: "1:235560110837:web:80a94d13bb18d067b453bc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var amount = sessionStorage.getItem("amount");
var product_name = sessionStorage.getItem("product_name");
var product_quantity = sessionStorage.getItem("product_quantity");

document.getElementById('total_price').innerHTML = amount;

async function saveData(){
var fname = document.getElementById('fname').value;
var email = document.getElementById('email').value;
var number = document.getElementById('phonenum').value;
var adr = document.getElementById('adr').value;
var city = document.getElementById('city').value;
var pin = document.getElementById('zip').value;
var state = document.getElementById('state').value;
var match = /^\d{10}$/;
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if (fname.length!=0 && email.length!=0 && adr.length!=0 && number.length!=0 && city.length!=0 && pin.length!=0 && state.length!=0) {
  if (email.match(mailformat)) {
    if (number.match(match)) {
      await firebase.database().ref('Address/'+number).set({
        Ac_Full_name:fname,
        Ac_Email:email,
        Ac_Mobile_Number:number,
        Address:adr,
        City:city,
        Pj_State:state,
        Pincode:pin,
        Total_amount_to_be_paid:amount,
        Products:product_name,
        Products_quantity:product_quantity,
      });

      window.open("https://pmny.in/QIzKBDGXbpi1", "_self");
    }else {
      alert("Enter a valid phonenumber 📱📲");
    }
  }else {
      alert('Enter a valid mail 📧');
  }
}else{
      alert('Enter data in all the fields😧');
}
}
