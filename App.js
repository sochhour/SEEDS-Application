import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { uuid } from 'uuidv4';
import Header from './components/Header';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';

const App = () => {
    const [items, setItems] = useState([
        {id: uuidv4(), text: 'Milk'},
        {id: uuid(), text: 'Eggs'},
        {id: uuid(), text: 'Bread'},
        {id: uuid(), text: 'Juice'},
    ]);

    const onChange  = (textValue) => setText(textValue);

    const addItem = (text) => {
        if (!text) {
            Alert.alert('Error', 'Please enter an item.', 
            [{ text: 'OK', onPress: () => console.log("OK pressed") }],
            { cancelable: true });
        }
        else {
            setItems(prevItems => {
                return [{id: uuid(), text}, ...prevItems];
            });
        }
    };

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id);
        });
    };

    return (
        <View style={styles.container}>
            <Header />
            <AddItem addItem={addItem}/>
            <FlatList data={items} renderItem={({item}) => (
                <ListItem item={item} deleteItem={deleteItem}/>
            )}/>
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 
      
});
 
export default App;