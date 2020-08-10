
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
    src: require('../images/usa.png')
  },
  {
    id: "1",
    title: "UK",
    src: require('../images/uk.png')
  },
  {
    id: "4",
    title: "India",
    src: require('../images/india.png')
  },
  {
    id: "5",
    title: "China",
    src: require('../images/china.png')
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
    <TouchableOpacity title={item.title} onPress={() => navigation.navigate(item.title, {countryId: 0})}>
      <Text style={styles.countryName}>{item.title}</Text>
      <Image source={item.src} style={styles.country}/>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList contentContainerStyle={styles.layout}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal= {true}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
    alignSelf: "flex-end",
  },
  country: {
    width: screenWidth,
    height: '100%',
  },
  countryName: {
    color: 'white',
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
