import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, ImageBackground, Button, TouchableOpacity, ScrollView, Dimensions } from "react-native";

import { NavigationContainer, useNavigation } from '@react-navigation/native'
// import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import Info from "./Info";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const DATA = [
  {
    order: "0",
    id: "3",
    title: "USA",
    src: require('../images/usa.png'),
    info: require('../images/info-button.png'),
    task: require('../images/task-button.png'),
    taskNav: "Task1"
  },
  {
    order: "1",
    id: "2",
    title: "UK",
    src: require('../images/uk.png'),
    info: require('../images/info-button.png'),
    task: require('../images/task-button.png'),
    taskNav: "Task2"
  },
  {
    order: "2",
    id: "1",
    title: "India",
    src: require('../images/india.png'),
    info: require('../images/info-button.png'),
    task: require('../images/task-button.png'),
    taskNav: "Task3"
  },
  {
    order: "3",
    id: "0",
    title: "China",
    src: require('../images/china.png'),
    info: require('../images/info-button.png'),
    task: require('../images/task-button.png'),
    taskNav: "Task4"
  }
];

const Item = ({ src }) => (
  <View>
    <Image style={styles.country}/>
  </View>
);

const Home = () => {

  state = {
    locked: [false, true, true, true]
  }

  navigation = useNavigation() 

  renderItem = ({ item }) => (
    <View title={item.title}>
      {this.state.locked[item.order] ? 
      <>
        <Image source={item.src} style={styles.country} blurRadius={15}/>
        <Text style={styles.countryNameLocked}>{item.title}</Text>

        <Image 
          source={require('../images/lock.png')}
          style={{width: 200, height: 200, resizeMode: 'contain', alignSelf: 'center', bottom: 300}}
        />
      </>

        :

      <>
        <Image source={item.src} style={styles.country}/>
        <Text style={styles.countryName}>{item.title}</Text>

        <TouchableOpacity onPress={() => navigation.navigate(item.taskNav)}>
          <Image source={item.task} style={getTaskStyles(item.title)}/> 
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('USA', {countryId: item.id})}>
          <Image source={item.info} style={styles.infoButton}/>
        </TouchableOpacity>
      </>
      }

    </View>
  );

  getTaskStyles = (name) => {
    if(name == 'USA') {
      return { zIndex: 1, width: 100, height: 100, resizeMode: 'contain', left: 250, bottom: 35 }
    }
    if(name == 'UK') {
      return { zIndex: 1, width: 100, height: 100, resizeMode: 'contain', left: 265, bottom: 320 }
    }
    if(name == 'India') {
      return { zIndex: 1, width: 100, height: 100, resizeMode: 'contain', left: 90, bottom: 345,}
    }
    if(name == 'China') {
      return { zIndex: 1, width: 100, height: 100, resizeMode: 'contain', left: 90, bottom: 70 }
    }
  }

  // index = this.props.route.params.index;
  // console.log("index=", index);
  // locked = this.props.route.params.locked;
  // console.log("locked=", locked)

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
    backgroundColor: 'lightskyblue',
    alignSelf: "flex-end",
    zIndex: 0,
  },
  country: {
    top: 225,
    width: screenWidth,
    height: screenHeight,
    zIndex: 0,
  },
  countryName: {
    color: 'white',
    top: 350,
    zIndex: 2,
    //fontFamily: 'Times New Roman',
    fontSize: 150,
    position: 'absolute',
    alignSelf: "center"
  },
  countryNameLocked: {
    color: 'white',
    top: 320,
    //top: 550,
    zIndex: 2,
    //fontFamily: 'Times New Roman',
    fontSize: 150,
    position: 'absolute',
    alignSelf: "center"
  },
  layout: {
    alignItems: 'flex-end',
    zIndex: 0
  },
  infoButton: {
    zIndex: 1,
    width: 100, 
    height: 100, 
    resizeMode: 'contain', 
    marginLeft: 15, 
    marginBottom: 30
  },
});

export default Home;
