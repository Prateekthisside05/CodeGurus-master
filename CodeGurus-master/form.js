(function () {
  const loginForm = document.getElementById("loginForm")
  const captchButton = document.getElementById("captchButton")
function cap(){
    var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'
                 ,'W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i',
                 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
                 var a = alpha[Math.floor(Math.random()*62)];
                 var b = alpha[Math.floor(Math.random()*62)];
                 var c = alpha[Math.floor(Math.random()*62)];
                 var d = alpha[Math.floor(Math.random()*62)];
                 var e = alpha[Math.floor(Math.random()*62)];
                 var f = alpha[Math.floor(Math.random()*62)];

                 var final = a+b+c+d+e+f;
                 document.getElementById("capt").value=final;
               }
function validcap(){
                var stg1 = document.getElementById('capt').value;
                var stg2 = document.getElementById('textinput').value;
                if(stg1==stg2){
                  alert("Form is validated Succesfully");
                  return true;
                }else{
                  alert("Please enter a valid captcha");
                  return false;
                }
               }
loginForm.addEventListener("submit",()=>validcap(event))
captchButton.addEventListener("click",()=>cap())
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyB7O3AU8xdMkOfvXGG9YsuAc9OMFDOdOwE",
        authDomain: "codegurus-44786.firebaseapp.com",
        projectId: "codegurus-44786",
        storageBucket: "codegurus-44786.appspot.com",
        messagingSenderId: "764942990085",
        appId: "1:764942990085:web:a90d74ba725ea109a0556c",
      };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //Get Elements
    const btnLogin = document.getElementById("btnLogin");
    //Add Login Event
    btnLogin.addEventListener('click', e => {
 console.log("enters");


        e.preventDefault()

        
        

          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;
          const capt = document.getElementById("capt").value
          const textinput = document.getElementById("textinput").value
          const auth = firebase.auth();
          //sign in with firebase auth
  // console.log("---",document.getElementById("capt"));
          try {
            console.log("captcha ",capt,textinput,"mm");
            if(capt !== textinput){
              console.log("runs");
              alert("Captcha does not match")
              return
            } 
            else{
              auth.signInWithEmailAndPassword(username, password).then(user => {
  
                  console.log("user is ", user)
  
                  alert("Login Successful :)");
                  window.location.href = "demo.html"
  
              }).catch(err => {
                  alert(err.message);
              });
            }
  
   
  
          } catch (error) {
  
              console.log(error)
  
          }
        

    });
}());

