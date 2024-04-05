const firebaseConfig = {
    apiKey: "AIzaSyB7O3AU8xdMkOfvXGG9YsuAc9OMFDOdOwE",
    authDomain: "codegurus-44786.firebaseapp.com",
    projectId: "codegurus-44786",
    storageBucket: "codegurus-44786.appspot.com",
    messagingSenderId: "764942990085",
    appId: "1:764942990085:web:a90d74ba725ea109a0556c"
  };



  firebase.initializeApp(firebaseConfig);

 

  // Get the login form element

  var loginForm = document.getElementById('loginForm');


  // Add a submit event listener to the login form
  loginForm.addEventListener('submit', function(event) {

    event.preventDefault(); // Prevent the form from submitting normally

 

    // Get user input values

    var email = document.getElementById('email').value;

    var password = document.getElementById('password').value;

 

    // Sign in the user with email and password

    firebase.auth().signInWithEmailAndPassword(email, password)

      .then(function(userCredential) {

        // User login successful

        var user = userCredential.user;

        console.log('User login successful');

        // Redirect the user to a dashboard or perform any other actions

      })

      .catch(function(error) {

        // User login error

        console.error('Error logging in:', error);

      });

  });

 

  // Get the sign-up form element

  var signupForm = document.getElementById('signupForm');

 

  // Add a submit event listener to the sign-up form

  signupForm.addEventListener('submit', function(event) {

    event.preventDefault(); // Prevent the form from submitting normally

 

    // Get user input values

    var name = document.getElementById('name').value;

    var phone = document.getElementById('phone').value;

    var email = document.getElementById('email').value;

    var password = document.getElementById('password').value;

 

    // Create a new user with email and password

    firebase.auth().createUserWithEmailAndPassword(email, password)

      .then(function(userCredential) {

        // User sign-up successful

        var user = userCredential.user;

 

        // Save additional user details to Firestore

        var userDocRef = firebase.firestore().collection('users').doc(user.uid);

        userDocRef.set({

          name: name,

          phone: phone,

          email: email

        })

        .then(function() {

          // User details saved successfully

          console.log('User sign-up successful');

          // Redirect the user to a success page or perform any other actions

        })

        .catch(function(error) {

          // Error saving user details

          console.error('Error saving user details:', error);

        });

      })

      .catch(function(error) {

        // User sign-up error

        console.error('Error signing up:', error);

      });

  }); 