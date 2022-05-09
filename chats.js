const firebaseConfig = {
    apiKey: "AIzaSyA1-Tnk7aw8P_bmaqK_RkPIDx62xIZ5BDY",
    authDomain: "friendsgroupchat-b1ce9.firebaseapp.com",
    databaseURL: "https://friendsgroupchat-b1ce9-default-rtdb.firebaseio.com",
    projectId: "friendsgroupchat-b1ce9",
    storageBucket: "friendsgroupchat-b1ce9.appspot.com",
    messagingSenderId: "849558228862",
    appId: "1:849558228862:web:6c47629fae38bcb66b6d2f",
    measurementId: "G-YSM9L7ZGZ5"
  };

firebase.initializeApp(firebaseConfig);

var UserInputsRef=firebase.database().ref("Texts/");

document.getElementById("form").addEventListener("submit", submitForm);

document.getElementById("refresh").addEventListener("refresh", showTexts);

function submitForm(){
    var result;
    var ref=UserInputsRef.child("key0/text");
        ref.on("value", (data) => {
        result=data.val();
    })
    const text=getInputVal("text");
    const user=getInputVal("user");
    UserInputsRef.child("key0/").update({
        text:result+"<br>"+user+": "+text,
    })
    alert("hi");
}

function showTexts(){
    var result;
    document.getElementById("ChatText").innerHTML="";
    var ref=UserInputsRef.child("key0/text");
        ref.on("value", (data) => {
        result=data.val();
        document.getElementById("ChatText").innerHTML=result;
    })
}

/*
function writeText(text){
    var result;
    var ref=firebase.database().ref("Texts/Key1/text");
    ref.on("value", (data) => {
        result=data.val();
        result=result.toString();
        text=result+" "+text;
        alert(text);
        UserInputsRef.child("Key1").set({
            text:text,
        })
    })
}

function writeToFirebase(result){
    UserInputsRef.child("Key1").set({
        text:result,
    })
}
*/

function getInputVal(id){
    return document.getElementById(id).value;
}