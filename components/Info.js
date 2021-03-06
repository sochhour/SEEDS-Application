import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button, SectionList, SafeAreaView, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
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

const orgLinks = {
  'Sierra Club': 'https://www.sierraclub.org/', 
  'Environmental Defense Fund':'https://www.edf.org/', 
  'World Wildlife Fund':'https://www.worldwildlife.org/',
  'Carbon Disclosure Project (CDP)':'https://www.cdp.net/en',
  'Stop Climate Chaos Coalition':'https://www.stopclimatechaos.scot/',
  'Young Peoples Trust For The Environment (YPTE)':'https://ypte.org.uk/'
};

class Info extends Component {
    constructor() {
      super();
      this.state = {
        countryId: 0,
        data : []
      };
    }

    componentDidMount() {
      database.ref().once('value', (snapshot) => {
        const data = snapshot.val();
        // console.log(JSON.stringify(data));
        const countries = data.Countries;
        // console.log(JSON.stringify(countries));
        console.log("countryId=", this.state.countryId)
        console.log([Object.keys(countries)]);
        let headerData = [];
        // headerData.push({
        //   title: "Country",
        //   data: [Object.keys(countries)[this.state.countryId]]
        // });
        headerData.push({
          title: "Environmental Issues",
          data: Object.values((Object.values(countries)[this.state.countryId]).Issues)
        });
        headerData.push({
          title: "Learn More!",
          data: Object.values((Object.values(countries)[this.state.countryId]).IssuesInfo)
        });
        headerData.push({
          title: "Non-profit Organizations",
          data: Object.values((Object.values(countries)[this.state.countryId]).Organizations)
        });
        // headerData.push({
        //   title: "OrgLinks",
        //   data: Object.values((Object.values(countries)[this.state.countryId]).OrgLinks)
        // });
        this.setState(() => ({
           data: headerData
        }));
        console.log("headerData =", headerData)
    })
  }


    render() {

      this.state.countryId = this.props.route.params.countryId;

      console.log("data=", this.state.data[0]);

      const Item = ({ title, section, index }) => (
        <View style={styles.item}>
          {section.title == 'Environmental Issues' ?
          <Text style={styles.title}>❗     {title}</Text>
          :
          section.title == 'Learn More!' ?
          <Text style={styles.title}>💡     {title}</Text>
          :
          <TouchableOpacity onPress={() => Linking.openURL(orgLinks[title])}>
            <Text style={styles.title}>📣     {title}</Text>
          </TouchableOpacity>
          }
        </View>
      );

        return (
          <SafeAreaView style={styles.container}>

             <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home'); console.log("PRESSED BACK BUTTON")}}>
                <Image 
                  source={require('../images/left-arrow.png')}
                  style={styles.arrow}
                />
              </TouchableOpacity>

            <SectionList
              sections={this.state.data}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item, section, index }) => <Item title={item} section={section} index={index}/>}
              renderSectionHeader={({ section: { title } }) => (
                <View style={{flex:1}}>
                    <Text style={styles.header}>{title}</Text>
                </View>
              )}
              stickySectionHeadersEnabled={false}
            />
        </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF3F0',
    },
    arrow: {
      width: 45,
      height: 45,
      marginRight: 310,
      marginTop: 0,
    },
    header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 15,
      marginBottom: 5,
      color: '#292E47',//'black',
      fontWeight: 'bold',
      fontSize: 30
    },
    item: {
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 20,
      fontSize: 20,
    },
    title: {
      flex: 1,
      justifyContent: 'center',
      fontSize: 20,
    }
});
export default Info;