import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native'
import * as firebase from 'firebase';

export default class signUp extends Component {
  state = { email: '', password: '', errorMessage: null }
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Welcome'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

render() {
    return (
      <View style={styles.container}>
      <Image source={require('../images/globeTrotter.png')} style={{width: 106, height: 120, bottom: 10}}/>
      <Text style={{color:'#B95255', fontSize: 40, marginBottom: 40}}>GlobeTrotter</Text>
      <Text style={{color:'#FDF5E6', fontSize: 40}}>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: '#FDF5E6' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email=>this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password=>this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" color="#B95255" onPress={this.handleSignUp}/>
        <View>
        <Text color='#292E47'> Already have an account? <Text onPress={() => this.props.navigation.navigate('Login')} style={{color:'#FDF5E6', fontSize: 18}}> Login </Text></Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D5B9B2',
    marginTop: -150,
  },
  textInput: {
    height: 40,
    fontSize:20,
    width: '90%',
    borderColor: '#B95255',
    borderBottomWidth: 1,
    marginTop: 8,
    marginVertical: 15
  }
})