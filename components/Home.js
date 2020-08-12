
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Button, TouchableOpacity, ScrollView, Dimensions } from "react-native";

import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Info from "./Info";

const screenWidth = Math.round(Dimensions.get('window').width);

const DATA = [
  {
    id: "0",
    title: "USA",
    src: require('../images/usa-buttons.png')
  },
  {
    id: "1",
    title: "UK",
    src: require('../images/uk-buttons.png')
  },
  {
    id: "4",
    title: "India",
    src: require('../images/india-buttons.png')
  },
  {
    id: "5",
    title: "China",
    src: require('../images/china-buttons.png')
  }
];

const Item = ({ src }) => (
  <View>
    <Image style={styles.country}/>
  </View>
);

const App = () => {
  const navigation = useNavigation() 

  const renderItem = ({ item }) => (
    <View title={item.title} >
      <Text style={styles.countryName}>{item.title}</Text>
      <Image source={item.src} style={styles.country}/>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList contentContainerStyle={styles.layout}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal= {true}
      />
      <TouchableOpacity style={styles.infoButton} onPress={() => navigation.navigate('UK', {countryId: 0})}>
        {/* <Image 
          source={require('../images/info-button.png')}
          style={{width: 100, height: 100, resizeMode: 'contain', marginTop: 30, marginBottom: 30}}  
        /> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.taskButton} >
        {/* <Image 
            source={require('../images/task-button.png')}
            style={{width: 100, height: 100, resizeMode: 'contain', marginTop: 30, marginBottom: 30}}  
          /> */}
      </TouchableOpacity>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'lightskyblue',
    alignSelf: "flex-end",
  },
  country: {
    width: screenWidth,
    height: '100%',
  },
  countryName: {
    color: 'white',
    //top: 85,
    zIndex: 1,
    fontFamily: 'Times New Roman',
    fontSize: 150,
    position: 'absolute',
    alignSelf: "center"
  },
  layout: {
    alignItems: 'flex-end',
  },
  infoButton: {
    top: 390,
    position: 'absolute',
    zIndex: 3,
    elevation: 3,
  },
  taskButton: {
    top: 420,
    left: 300,
    position: 'absolute',
    zIndex: 3,
    elevation: 3,
  }
});

export default App;
