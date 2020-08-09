import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button, Image, TouchableOpacity, Modal } from 'react-native';
 

class Task extends Component {

    state = {
      lightToggle: false,
      modalIsVisible: false
    }

    toggleLight() {
      this.setState({
        lightToggle: !this.state.lightToggle
      });
    }

    toggleModal() {
      //if(this.state.lightToggle == true) {
        this.setState({
          modalIsVisible: !this.state.modalIsVisible
        });
    //}
    }

    render() {
      const {toggle} = this.state;
        return (
            <View style={styles.container}>

                <Text style={styles.headerText}>Task: Let's save electricity!</Text>
                <Text style={styles.situation}>You're about to leave your house to walk your dog after dinner. Before you go, </Text>
                <Text style={styles.task}>let's turn off the lights!</Text>

                <TouchableOpacity activeOpacity={1} onPress={() => this.toggleLight()}>
                  {this.state.lightToggle ? 
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

                <Modal 
                animationType = {"none"} 
                transparent = {true}
                visible = {this.state.modalIsVisible}
                onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
                  <View style={styles.modalContainer}>
                  {this.state.lightToggle ?
                    <View style={styles.modal}>
                      <Text style={styles.headerText}>Congrats!</Text>
                      <Text style={styles.modalText}>You've unlocked the next country: US!</Text>
                      <Button title="Let's go home" onPress={() => {this.toggleModal(); this.props.navigation.navigate('Home')}}/>
                      </View>
                    : 
                    <View style={styles.modal}>
                      <Text style={styles.headerText}>Try Again</Text>
                      <Text style={styles.modalText}>Complete the current task to continue!</Text>
                      <Button title="Retry" onPress={() => {this.toggleModal()}}/>
                    </View>
                    }
                  </View>
                </Modal>

                <Button title="Complete the task" onPress={() => {this.toggleModal()}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerText: {
      fontSize: 30,
      textAlign: "center",
      //marginTop: 50,
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
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    modal: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      justifyContent: "center",
      alignItems: "center",
      //alignSelf: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    modalText: {
      fontSize: 20,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 10,
      marginRight: 10,
      textAlign: "center",
    }
  });
  

export default Task;