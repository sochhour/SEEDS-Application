import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
 

class Task extends Component {

    state = {
      toggle: false
    }

    clickLight() {
      this.setState({
        toggle: !this.state.toggle
      });
    }

    render() {
      const {toggle} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Task: Let's save electricity!</Text>
                <Text style={styles.situation}>You're about to leave your house to walk your dog after dinner. Before you go, </Text>
                <Text style={styles.task}>let's turn off the lights!</Text>

                <TouchableOpacity activeOpacity={1} onPress={() => this.clickLight()}>
                  {this.state.toggle ? 
                  <Image 
                    source={require('../assets/png/light-off.png')}
                    style={{width: 200, height: 200, marginTop: 30, marginBottom: 30}}
                    
                  />
                  :
                  <Image 
                    source={require('../assets/png/light-on.png')}
                    style={{width: 200, height: 200, marginTop: 30, marginBottom: 30}}
                    
                  />}
                </TouchableOpacity>

                <Button title="Complete the task"></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: 'center',
      alignItems: 'center'
    },
    headerText: {
      fontSize: 30,
      textAlign: "center",
      marginTop: 50,
    },
    situation: {
      fontSize: 20,
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
      textAlign: "center",
    },
    task: {
      fontSize: 30,
      textAlign: "center",
      fontWeight: "bold",
    },
    image: {
      width:200,
      height: 200,
      backgroundColor: "green",
      marginTop: 60
    },
  });
  

export default Task;