// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCVUQGv8S3DPyKxlyT9hvfVgE3mUnVQkys",
    authDomain: "unergia-payment-auth.firebaseapp.com",
    databaseURL: "https://unergia-payment-auth.firebaseio.com",
    projectId: "unergia-payment-auth",
    storageBucket: "unergia-payment-auth.appspot.com",
    messagingSenderId: "796540767696"
  };
  firebase.initializeApp(config);

document.getElementById("btnSignUp").addEventListener('click', e=>{
  window.location.href="signup.html";
})

document.getElementById("btnLogin").addEventListener('click', e=>{
  const email = document.getElementById("txtEmail").value;
  const pass = document.getElementById("txtPassword").value;
  const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
  promise.catch(e=>{ console.log(e.massage)})
})

firebase.auth().onAuthStateChanged(user=>{ 
  if(user){
    document.getElementById("btnLogOut").classList.remove('hide')
  } else{
    document.getElementById("btnLogOut").classList.add('hide')
  }
})

document.getElementById("btnLogOut").addEventListener('click', e=>{
  firebase.auth().signOut();
  console.log('logged out')
})