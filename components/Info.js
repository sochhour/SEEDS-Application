import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button, SectionList, SafeAreaView, route } from 'react-native';
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

class Info extends Component {
    constructor() {
      super();
      this.state = {
        countryId: 0,
        data : []
      };
      //countryId = this.props.route.params;
    }

    componentDidMount() {
      database.ref().once('value', (snapshot) => {
        const data = snapshot.val();
        // console.log(JSON.stringify(data));
        const countries = data.Countries;
        // console.log(JSON.stringify(countries));
        let headerData = [];
        headerData.push({
          title: "Country",
          data: [Object.keys(countries)[this.state.countryId]]
        });
        headerData.push({
          title: "Issues",
          data: Object.values((Object.values(countries)[this.state.countryId]).Issues)
        });
        headerData.push({
          title: "Organizations",
          data: Object.values((Object.values(countries)[this.state.countryId]).Organizations)
        });
        this.setState(() => ({
           data: headerData
        }));
        console.log("headerData =", headerData)
    })
  }
    render() {

      this.state.countryId = this.props.route.params.countryId;

      const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );

        return (
          <SafeAreaView style={styles.container}>

             <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home'); console.log("PRESSED BACK BUTTON")}}>
                <Image 
                  source={require('../assets/png/left-arrow.png')}
                  style={styles.arrow}
                />
              </TouchableOpacity>

            <SectionList
              sections={this.state.data}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => <Item title={item} />}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
              )}
            />
        </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
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
    },
    header: {
      padding: 15,
      marginBottom: 5,
      color: 'black',
      fontWeight: 'bold',
    },
});
export default Info;