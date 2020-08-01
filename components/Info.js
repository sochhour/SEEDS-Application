// import React, { Component } from 'react';
// import { Platform, StyleSheet, View, Text, Button } from 'react-native';
 

// class Info extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.headerText}>Info Screen</Text>
//                 <Button title="Go to Task Screen" onPress={() => this.props.navigation.navigate('Task')}/>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center'
//     },
//     headerText: {
//       fontSize: 40,
//       textAlign: "center",
//       margin: 10
//     },
  
//   });
  

// export default Info;

import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button, SectionList } from 'react-native';

const sections = [
  {
    id: 0,
    title: 'Issues',
    data: [
      {id: 0, text: 'Pollution'},
      {id: 1, text: 'Waste'},
      {id: 2, text: 'Carbon Emissions'},
    ]
  },
  {
    id: 1,
    title: 'Organizations',
    data: [
      {id: 3, text: 'Agency 1'},
      {id: 4, text: 'Agency 2'},
    ]
  }
]

const extractKey = ({id}) => id
 

class Info extends Component {
  renderItem = ({item}) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

  renderSectionHeader = ({section}) => {
    return (
      <Text style={styles.header}>
        {section.title}
      </Text>
    )
  }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Info Screen</Text>
                <SectionList
                  //style={styles.container}
                  sections={sections}
                  renderItem={this.renderItem}
                  renderSectionHeader={this.renderSectionHeader}
                  keyExtractor={extractKey}
                />
                <Button title="Go to Task Screen" onPress={() => this.props.navigation.navigate('Task')}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerText: {
      fontSize: 40,
      textAlign: "center",
      margin: 10
    },
    row: {
      padding: 15,
      marginBottom: 5,
      //backgroundColor: 'skyblue',
    },
    header: {
      padding: 15,
      marginBottom: 5,
      //backgroundColor: 'steelblue',
      color: 'black',
      fontWeight: 'bold',
    },
});
  

export default Info;