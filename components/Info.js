import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button, SectionList, SafeAreaView } from 'react-native';
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

// From the documentation example ------------------------------
const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];
// ---------------------------------------------------------------


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

        let keys = Object.keys(countryDict)
        console.log("KEYS=", keys)
        // keys = countryId, Issues, and Organizations
        
        // retrieve issues
        let issues = Object.values(countryDict)[1];
        console.log("ISSUES= ", issues);

        // retrieve organizations
        let organizations = Object.values(countryDict)[2];
        console.log("ORGS = ", organizations)

        this.countryData = keys.map((key) => {
            return { title: key, data: [] }
          });

        console.log("countryData 1", this.countryData)
        
        // push issue strings to data structure
        let id = 0;
        for(let i = 0; i < Object.keys(issues).length; i++) {
          this.countryData[0].data.push(Object.values(issues)[i])
          id++;
        }

        // push organizations strings to data structure
        for(let i = 0; i < Object.keys(organizations).length; i++) {
          this.countryData[1].data.push(Object.values(organizations)[i])
          id++;
        }

        console.log("countryData 2", this.countryData)
      })
    }
    
    render() {

      const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
      
        return (
          // From the documentation example ------------------------------
          <SafeAreaView style={styles.container}>
            <SectionList
              sections={this.countryData}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => <Item title={item} />}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
              )}
            />
        </SafeAreaView>
        // ---------------------------------------------------------------
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
    },
    header: {
      padding: 15,
      marginBottom: 5,
      color: 'black',
      fontWeight: 'bold',
    },
});
  

export default Info;