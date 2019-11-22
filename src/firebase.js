import * as firebase from 'firebase/app';
import 'firebase/firestore';

const fConfig = {
  apiKey: "AIzaSyAgKSRGZDrIRzve1tmhcbSapaTxjchYvNI",
  authDomain: "md-poc-db.firebaseapp.com",
  databaseURL: "https://md-poc-db.firebaseio.com",
  projectId: "md-poc-db",
  storageBucket: "md-poc-db.appspot.com",
  messagingSenderId: "168597514022",
  appId: "1:168597514022:web:3a851ecfdb4580d75883e7"
};

firebase.initializeApp(fConfig);

firebase.firestore();

export default firebase;