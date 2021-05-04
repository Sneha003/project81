import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAvJasSnr2EA6H0LkMcdOJKdXhR-rlm3UA",
  authDomain: "booksanta-942f6.firebaseapp.com",
  databaseURL: "https://booksanta-942f6.firebaseio.com",
  projectId: "booksanta-942f6",
  storageBucket: "booksanta-942f6.appspot.com",
  messagingSenderId: "578282028595",
  appId: "1:578282028595:web:91796adbcad2d8cf40ed46",
  measurementId: "G-DQ50DL9NLT"

  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
