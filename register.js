
  // Import the Firebase SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  
  import {
    getAuth,
    createUserWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
// Ensure DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCK56hoZbIWegeCb3IK0AidyeddxrF0S3U",
    authDomain: "login-87119.firebaseapp.com",
    projectId: "login-87119",
    storageBucket: "login-87119.appspot.com",
    messagingSenderId: "1008946722900",
    appId: "1:1008946722900:web:df77bea881039240ab15c1",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  // Register form handling
  const registerForm = document.getElementById("RegForm");
  const registerBtn = document.getElementById("submit");

  registerBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent page refresh

    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User account created
        const user = userCredential.user;
        alert("Account created successfully!");
        window.location.href = "grand.html"; // Redirect after successful registration
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage); // Show error message
      });
  });
});
