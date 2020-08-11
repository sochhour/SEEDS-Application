import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
 

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Home Screen</Text>
                <Button title="Go to Info Screen" onPress={() => this.props.navigation.navigate('Info')}/>
                <Button title="Go to Task 1" onPress={() => this.props.navigation.navigate('Task1')}/>
                <Button title="Go to Task 2" onPress={() => this.props.navigation.navigate('Task2')}/>
                <Button title="Go to Task 3" onPress={() => this.props.navigation.navigate('Task3')}/>
                <Button title="Go to Task 4" onPress={() => this.props.navigation.navigate('Task4')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    headerText: {
      fontSize: 40,
      textAlign: "center",
      margin: 10
    },
  
  });
  

export default Home;