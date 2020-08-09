
import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home';
import Info from "./components/Info";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
   
    createHomeStack = () =>
    <Stack.Navigator screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UK" component={Info} />
        <Stack.Screen name="India" component={Info} />
        <Stack.Screen name="Qatar" component={Info} />
        <Stack.Screen name="USA" component={Info} />
        <Stack.Screen name="China" component={Info} />
    </Stack.Navigator>

    render() {

        return (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" children={this.createHomeStack}/>
                    <Drawer.Screen name="UK" component={Info} />
                    <Drawer.Screen name="India" component={Info} />
                    <Drawer.Screen name="Qatar" component={Info} />
                    <Drawer.Screen name="USA" component={Info} />
                    <Drawer.Screen name="China" component={Info}/>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
};


