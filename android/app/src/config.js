import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

let config = {
  apiKey: 'AIzaSyDWu7GdHpJHlYBh_P5RsICD3dfxXIso538',
  databaseURL: "https://narwhals-f88c3.firebaseio.com",
  appId: '1:779468661947:android:5709a677ba7ddac246759e',
  projectId: 'narwhals-f88c3',
  storageBucket: 'narwhals-f88c3.appspot.com',
  messagingSenderId: '779468661947',
  //authDomain: 'rnfirebXXX-XXXX.firebaseapp.com',
};

// is this right? lol
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export { firebase as fb} ;

// let app = firebase.initializeApp(config);
// export const db = app.database();

