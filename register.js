  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";


  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCTIN86z2fozLxmuCULHt7_zReKUGDahiw",
    authDomain: "login-example-d6aa0.firebaseapp.com",
    projectId: "login-example-d6aa0",
    storageBucket: "login-example-d6aa0.appspot.com",
    messagingSenderId: "547919643919",
    appId: "1:547919643919:web:05fed007ab510d67956a7a"
  };

  // Initialize Firebase
  const app = initisalizeApp(firebaseConfig);


  //inputs
  const email= document.getElementById('email').value;
  const username=document.getElementById('username').value;
  const password=document.getElementById('password').value; 
  const submit=document.getElementById('submit');
  
  submit.addEventListener("click",function(event){
    event.preventDefault()
    alert(5)
  })