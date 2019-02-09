import * as firebase from 'firebase'
  // Initialize Firebase
var config = {
    apiKey: "AIzaSyCiuEAdV0RDv2IIcEME8YQ_ueFKcrV7QTk",
    authDomain: "photowall-47185.firebaseapp.com",
    databaseURL: "https://photowall-47185.firebaseio.com",
    projectId: "photowall-47185",
    storageBucket: "photowall-47185.appspot.com",
    messagingSenderId: "176758237304"
};

firebase.initializeApp(config);

const database = firebase.database()

export {database}