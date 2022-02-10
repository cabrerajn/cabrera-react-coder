import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(

{
    apiKey: "AIzaSyBoBKrwszpeajUH15RarC0HK9rcdEV1Qfc",
    authDomain: "ecommerce-coder-cabrera.firebaseapp.com",
    projectId: "ecommerce-coder-cabrera",
    storageBucket: "ecommerce-coder-cabrera.appspot.com",
    messagingSenderId: "304769865533",
    appId: "1:304769865533:web:9f0b92bf3ba202321b9754"
}
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}
