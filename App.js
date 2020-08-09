
import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home';
import Info from "./components/Info";
import Task from "./components/Task";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {

    render() {

        return (
            <NavigationContainer> 
                <Stack.Navigator headerMode={'none'} screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Info" component={Info} />
                    <Stack.Screen name="Task" component={Task} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
};


  

