import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBLHav-RTfh39_4nkGPMZGECoBppMMRLWw",
  authDomain: "socialapp-c6faa.firebaseapp.com",
  databaseURL: "https://socialapp-c6faa.firebaseio.com",
  projectId: "socialapp-c6faa",
  storageBucket: "socialapp-c6faa.appspot.com",
  messagingSenderId: "791332964872",
  appId: "1:791332964872:web:1ba1b14705c0f0de8ddfbd"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator (
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initalRouteName: "Loading"
    }
  )
)