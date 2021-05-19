import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDTZlc_AknoM9MBChCTDL88TuWucT3sQoE",
    authDomain: "temp-hum-ba71c.firebaseapp.com",
    databaseURL: "https://temp-hum-ba71c-default-rtdb.firebaseio.com",
    projectId: "temp-hum-ba71c",
    storageBucket: "temp-hum-ba71c.appspot.com",
    messagingSenderId: "816996551328",
    appId: "1:816996551328:web:82cb5e370022d987e0d7c5",
    measurementId: "G-P60XDY2G2C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.storage().ref();
const rt = firebaseApp.database().ref();
export {db,rt};