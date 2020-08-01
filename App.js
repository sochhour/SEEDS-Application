
import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home';
import China from "./components/China";
import UK from "./components/UK";
import India from "./components/India";
import Qatar from "./components/Qatar";
import Spain from "./components/Spain";
import USA from "./components/USA";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
   
    createHomeStack = () =>
    <Stack.Navigator screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UK" component={UK} />
        <Stack.Screen name="India" component={India} />
        <Stack.Screen name="Qatar" component={Qatar} />
        <Stack.Screen name="Spain" component={Spain} />
        <Stack.Screen name="USA" component={USA} />
        <Stack.Screen name="China" component={China} />
    </Stack.Navigator>

    render() {

        return (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" children={this.createHomeStack}/>
                    <Drawer.Screen name="China" component={China}/>
                    <Drawer.Screen name="UK" component={UK} />
                    <Drawer.Screen name="India" component={India} />
                    <Drawer.Screen name="Qatar" component={Qatar} />
                    <Drawer.Screen name="Spain" component={Spain} />
                    <Drawer.Screen name="USA" component={USA} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
};

