import Firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

let config = {
  apiKey: 'AIzaSyDWu7GdHpJHlYBh_P5RsICD3dfxXIso538',
//   databaseURL: "https://narwhals-f88c3.firebaseio.com",
  //authDomain: 'rnfirebXXX-XXXX.firebaseapp.com',
  projectId: 'narwhals-f88c3',
  storageBucket: 'narwhals-f88c3.appspot.com',
  //messagingSenderId: 'XXXXXXX'
};

export {firebase, database};

let app = Firebase.initializeApp(config);
export const db = app.database();