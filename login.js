
    // Import the Firebase SDKs
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
    import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
    // Ensure DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

  
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
  
    // Login form handling
    const loginBtn = document.getElementById("login-btn");
  
    loginBtn.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent page refresh
  
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
  
      // Check if email or password is empty
      if (!email || !password) {
        alert("Email and password cannot be empty!");
        return;
      }
  
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // User signed in
          const user = userCredential.user;
          alert("Login successful!");
          window.location.href = "grandtheft.html"; // Redirect on successful login
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`Error: ${errorMessage}`);  // Display actual error message
        });
    });
  });
  