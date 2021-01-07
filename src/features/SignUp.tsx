import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCObRoKq4mq_OucM2zsu2WsfzS1z5RTNFU",
    authDomain: "blogappbyahsen.firebaseapp.com",
    projectId: "blogappbyahsen",
    storageBucket: "blogappbyahsen.appspot.com",
    messagingSenderId: "28323700262",
    appId: "1:28323700262:web:40b2b5686ded0555c310e7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  