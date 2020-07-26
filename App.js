
import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {db} from './android/app/src/config';
// just trying this
//import firebaseConfig from './android/app/src/config.js'

import Home from './components/Home';
import Info from "./components/Info";
import Task from "./components/Task";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
   
    createHomeStack = () =>
    <Stack.Navigator screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Task" component={Task} />
    </Stack.Navigator>

    render() {

        return (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" children={this.createHomeStack}/>
                    <Drawer.Screen name="Info" component={Info}/>
                    <Drawer.Screen name="Task" component={Task}/>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
};


  

