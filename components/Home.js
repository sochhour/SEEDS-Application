
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Button, TouchableOpacity, ScrollView, Dimensions } from "react-native";

import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import China from "./China";
import UK from "./UK";
import Spain from "./Spain";
import Qatar from "./Qatar";
import India from "./India";
import USA from "./USA";

const screenWidth = Math.round(Dimensions.get('window').width);

const DATA = [
  {
    id: "0",
    title: "China",
    src: require('../images/china.png')
  },
  {
    id: "1",
    title: "UK",
    src: require('../images/london.png')
  },
  {
    id: "2",
    title: "Spain",
    src: require('../images/spain.png')
  },
  {
    id: "3",
    title: "Qatar",
    src: require('../images/qatar.png')
  },
  {
    id: "4",
    title: "India",
    src: require('../images/india.png')
  },
  {
    id: "5",
    title: "USA",
    src: require('../images/usa.png')
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
    <TouchableOpacity title={item.title} onPress={() => navigation.navigate(item.title)}>
      <Text style={styles.countryName}>{item.title}</Text>
      <Image source={item.src} style={styles.country}/>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList contentContainerStyle={styles.layout}
        // ListHeaderComponent={
        // <>
        //   <Image style={styles.topImage} source={require('../images/top.png')}/>
        //   <Text style={styles.topText}>Explore</Text>
        //   <Text style={styles.topText2}>To start, select a country</Text>
        // </>}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal= {true}
        // ItemSeparatorComponent={
        //   () => <View style={{ height: 20 }}/>
        // }
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#262223',
    alignSelf: "flex-end",
  },
  topImage: {
    height: 400,
    marginBottom: 20,
    resizeMode: 'cover'
  },
  topText: {
    color: 'white',//'#DDC6B6',
    top: 100,
    left: 260,
    zIndex: 3,
    fontFamily: 'Times New Roman',
    fontSize: 110,
    position: 'absolute',
    //justifyContent: 'center'
  },
  topText2: {
    color: 'white',//'#DDC6B6',
    top: 205,
    left: 262,
    zIndex: 3,
    fontFamily: 'Times New Roman',
    fontSize: 35,
    position: 'absolute',
    //justifyContent: 'center'
  },
  country: {
    width: screenWidth,
    height: 300,
    //resizeMode: 'cover'
    //resizeMode: 'contain'
  },
  countryName: {
    color: 'white',//'#DDC6B6',
    top: 95,
    zIndex: 1,
    fontFamily: 'Times New Roman',
    fontSize: 75,
    position: 'absolute',
  },
  layout: {
    alignItems: 'flex-end',
  }
});


export default App;
