import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, SectionList, Image, TouchableOpacity } from 'react-native';

const sections = [
  {
    id: 0,
    title: 'Issues',
    data: [
      {id: 0, text: 'Pollution'},
      {id: 1, text: 'Waste'},
      {id: 2, text: 'Carbon Emissions'},
    ]
  },
  {
    id: 1,
    title: 'Organizations',
    data: [
      {id: 3, text: 'Agency 1'},
      {id: 4, text: 'Agency 2'},
    ]
  }
]

const extractKey = ({id}) => id
 

class Info extends Component {
  renderItem = ({item}) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

  renderSectionHeader = ({section}) => {
    return (
      <Text style={styles.header}>
        {section.title}
      </Text>
    )
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

                <Text style={styles.headerText}>Info Screen</Text>

                <SectionList
                  //style={styles.container}
                  sections={sections}
                  renderItem={this.renderItem}
                  renderSectionHeader={this.renderSectionHeader}
                  keyExtractor={extractKey}
                />
                
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
    arrow: {
      width: 45,
      height: 45,
      marginRight: 310,
      marginTop: 50,
    },
    headerText: {
      fontSize: 40,
      textAlign: "center",
      margin: 10
    },
    row: {
      padding: 15,
      marginBottom: 5,
      //backgroundColor: 'skyblue',
    },
    header: {
      padding: 15,
      marginBottom: 5,
      //backgroundColor: 'steelblue',
      color: 'black',
      fontWeight: 'bold',
    },
});
  

export default Info;