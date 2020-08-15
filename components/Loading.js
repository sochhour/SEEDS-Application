import React, { Component } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native'
import Login from "./Login";
import signUp from './SignUp';
import Home from './Home';

import * as firebase from 'firebase';

export default class Loading extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate('SignUp')//(user ? 'Home' : 'SignUp')
    })
}

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/globeTrotter.png')}/>
        <Text style={{color:'#FFF3F0', fontSize: 40}}>Globe Trotter</Text>
        {/* <Text style={{color:'#FFF3F0', fontSize: 40}}>Loading</Text> */}
        <ActivityIndicator color='#FFF3F0' size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D5B9B2'
  }
});