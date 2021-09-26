import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCjhSW2K3eOFXjySBxKlPcYCAkto6hx1CE",
  authDomain: "wireless-buzzer-cd117.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-cd117-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-cd117",
  storageBucket: "wireless-buzzer-cd117.appspot.com",
  messagingSenderId: "793107652971",
  appId: "1:793107652971:web:3ddb8622d50be63e706c2e",
  measurementId: "G-JC8Z27Y29N"
};

firebase.initializeApp(firebaseConfig)

export default firebase.database()