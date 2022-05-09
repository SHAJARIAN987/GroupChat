var firebaseConfig = {
    apiKey: "AIzaSyA1-Tnk7aw8P_bmaqK_RkPIDx62xIZ5BDY",
    authDomain: "friendsgroupchat-b1ce9.firebaseapp.com",
    databaseURL: "https://friendsgroupchat-b1ce9-default-rtdb.firebaseio.com",
    projectId: "friendsgroupchat-b1ce9",
    storageBucket: "friendsgroupchat-b1ce9.appspot.com",
    messagingSenderId: "849558228862",
    appId: "1:849558228862:web:6c47629fae38bcb66b6d2f",
    measurementId: "G-YSM9L7ZGZ5"
  };
var result;
firebase.initializeApp(firebaseConfig);
var UserInputsRef=firebase.database().ref("Texts");
document.getElementById("form").addEventListener("Enter", checkPassword);
function checkPassword(){
    var Password;
    var ref=firebase.database().ref("Password");
    ref.on("value", (data) => {
        result=data.val();
        Password=document.getElementById("Box").value;
        if(result===(Password)){
            var txt="Click to open the chat:"
            document.write("<p>Link : " + txt.link("Chat.html") + "</p>");
        }
        else{
            alert("Try Again.");
        }
    })
}
