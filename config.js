import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZtG8krq-6EQX3TnwUqh5htqa02mj3pac",
  authDomain: "school-attendance-app-58737.firebaseapp.com",
  databaseURL: "https://school-attendance-app-58737-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-58737",
  storageBucket: "school-attendance-app-58737.appspot.com",
  messagingSenderId: "628725174627",
  appId: "1:628725174627:web:7b9db267a3d11cabb50356",
  measurementId: "G-0JES4WQ04H"
};
//initialize your database
firebase.initializeApp(firebaseConfig)

export default firebase.database()
 

  