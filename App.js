
import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home';
import Info from "./components/Info";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Task4 from "./components/Task4";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {

    render() {

        return (
            <NavigationContainer> 
                <Stack.Navigator headerMode={'none'} screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Info" component={Info} />
                    <Stack.Screen name="Task1" component={Task1} />
                    <Stack.Screen name="Task2" component={Task2} />
                    <Stack.Screen name="Task3" component={Task3} />
                    <Stack.Screen name="Task4" component={Task4} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
};


  

