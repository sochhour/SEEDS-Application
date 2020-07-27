import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button, SectionList } from 'react-native';
import * as firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyDWu7GdHpJHlYBh_P5RsICD3dfxXIso538',
  databaseURL: "https://narwhals-f88c3.firebaseio.com",
  appId: '1:779468661947:android:5709a677ba7ddac246759e',
  projectId: 'narwhals-f88c3',
  storageBucket: 'narwhals-f88c3.appspot.com',
  messagingSenderId: '779468661947',
  //authDomain: 'rnfirebXXX-XXXX.firebaseapp.com',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const database = firebase.database();
console.log(database);
 
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

    constructor() {
      super();
      this.countryData = [];
    }

    componentDidMount() {
      database.ref().on('value', (snapshot) => {
        const data = snapshot.val();
        let countryDict = data.Countries.UK;
        console.log("countryDict = ", countryDict);

        console.log("KEYS =", Object.keys(countryDict));
        // Keys: CountryId, Issues, Organizations

        let countryId = Object.values(countryDict)[0];
        console.log("countryId = ", countryId);

        this.countryData = Object.keys(countryDict).map((key) => {
          return { header: key}
        });
        console.log("countryData", this.countryData)
      })
    }

    renderItem = ({item}) => {
      console.log("ITEM=", item)
      return (
        <Text style={styles.row}>
          {item}
        </Text>
      )
    }

    renderSectionHeader = ({section}) => {
      console.log("SECTION=", section)
      return (
        <Text style={styles.header}>
          {section}
        </Text>
      )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Info Screen</Text>
                <SectionList
                  sections={this.countryData}
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
      alignItems: 'center'
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