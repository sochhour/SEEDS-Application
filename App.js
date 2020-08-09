
import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home';
import UK from "./components/UK";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
   
    createHomeStack = () =>
    <Stack.Navigator screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UK" component={UK} />
        <Stack.Screen name="India" component={UK} />
        <Stack.Screen name="Qatar" component={UK} />
        <Stack.Screen name="USA" component={UK} />
        <Stack.Screen name="China" component={UK} />
    </Stack.Navigator>

    render() {

        return (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" children={this.createHomeStack}/>
                    <Drawer.Screen name="UK" component={UK} />
                    <Drawer.Screen name="India" component={UK} />
                    <Drawer.Screen name="Qatar" component={UK} />
                    <Drawer.Screen name="USA" component={UK} />
                    <Drawer.Screen name="China" component={UK}/>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
};


