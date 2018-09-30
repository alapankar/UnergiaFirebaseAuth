
var config = {
    apiKey: "AIzaSyCVUQGv8S3DPyKxlyT9hvfVgE3mUnVQkys",
    authDomain: "unergia-payment-auth.firebaseapp.com",
    databaseURL: "https://unergia-payment-auth.firebaseio.com",
    projectId: "unergia-payment-auth",
    storageBucket: "unergia-payment-auth.appspot.com",
    messagingSenderId: "796540767696"
  };
  firebase.initializeApp(config);

   
document.getElementById("btnSignUpi").addEventListener('click', e=>{
  const email = document.getElementById("txtEmaili").value;
  const pass = document.getElementById("txtPasswordi").value;
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
   console.log(error.message);
});
})
