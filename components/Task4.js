import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, Modal } from 'react-native';
 

class Task4 extends Component {

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
        this.setState({
          modalIsVisible: !this.state.modalIsVisible
        });
    }

    render() {
        return (
            <View style={styles.container}>

              <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home'); console.log("PRESSED BACK BUTTON")}}>
                  <Image 
                    source={require('../assets/png/left-arrow.png')}
                    style={styles.arrow}
                  />
              </TouchableOpacity>

                <Text style={styles.headerText}>Task: Save water!</Text>
                <Text style={styles.situation}> The UK is on track to have a water shortage by 2050... </Text>
                <Text style={styles.task}>Turn the water off!</Text>

                <TouchableOpacity activeOpacity={1} onPress={() => this.toggleLight()}>
                  {this.state.lightToggle ? 
                  <Image 
                    source={require('../assets/png/water-off.png')}
                    style={{width: 250, height: 250, resizeMode: 'contain', marginTop: 30, marginBottom: 30}}
                    
                  />
                  :
                  <Image 
                    source={require('../assets/png/water-on.png')}
                    style={{width: 250, height: 250, resizeMode: 'contain', marginTop: 30, marginBottom: 30}}
                    
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
                      <Text style={styles.modalText}>You've unlocked the next country: India!</Text>
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
      alignItems: 'center',
      backgroundColor: '#F9F9ED'
    },
    arrow: {
      width: 45,
      height: 45,
      marginRight: 310,
      marginTop: -90,
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
      fontSize: 20,
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
  

export default Task4;