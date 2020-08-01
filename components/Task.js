import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
 

class Task extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <Text style={styles.headerText}>Task Screen</Text> */}
                <Text style={styles.headerText}>Task: Let's save electricity!</Text>
                <Text style={styles.situation}>You're about to leave your house to walk your dog after dinner. Before you go, </Text>
                <Text style={styles.task}>let's turn off the lights!</Text>
                <View style={styles.image}>
                  <Text style={styles.task}> IMAGE</Text>
                </View>
                <Button title="Complete the task" style={styles.button}></Button>
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
    button: {
      marginTop: 50,
    }
  
  });
  

export default Task;