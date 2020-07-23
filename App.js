
import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// just trying this
import firebaseConfig from 'android/app/src/config.js'

import Home from './components/Home';
import Info from "./components/Info";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//might be causing errors
firebase.initializeApp(firebaseConfig);

export default class App extends Component {
   
    createHomeStack = () =>
    <Stack.Navigator screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>

    render() {

        return (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" children={this.createHomeStack}/>
                    <Drawer.Screen name="Info" component={Info}/>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
};


  

