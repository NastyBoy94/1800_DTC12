// location of firebase to read/write from
var firebaseConfig = {
    apiKey: "AIzaSyA5yOcqB3Iu-HnMANfNQiNwV0vpntNGdd8",
    authDomain: "dtc012-comp1800.firebaseapp.com",
    projectId: "dtc012-comp1800",
    storageBucket: "dtc012-comp1800.appspot.com",
    messagingSenderId: "194965387452",
    appId: "1:194965387452:web:f4e80ca20a0f8170f678b9",
    measurementId: "G-W1J059450Z"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();