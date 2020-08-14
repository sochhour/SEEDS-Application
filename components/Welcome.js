import React, { Component } from 'react'
import { Animated, View, StyleSheet, Image, Dimensions, ScrollView, Button } from 'react-native'

const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10
const screenHeight = Dimensions.get('window').height

const images = [
  {src: require('../images/welcomeImages/one.png')},
  {src: require('../images/welcomeImages/two.png')},
  {src: require('../images/welcomeImages/three.png')},
  {src: require('../images/welcomeImages/four.png')}
]

export default class App extends Component {

  numItems = images.length
  itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
  animVal = new Animated.Value(0)

  render() {
    let imageArray = []
    let barArray = []
    images.forEach((image, i) => {
      console.log(image, i)
      const thisImage = (
        <Image
          key={`image${i}`}
          source={image.src}
          style={{ width: deviceWidth, height: screenHeight, resizeMode: 'contain' }}
        />
      )
      imageArray.push(thisImage)

      const scrollBarVal = this.animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-this.itemWidth, this.itemWidth],
        extrapolate: 'clamp',
      })

      const thisBar = (
        <View
          key={`bar${i}`}
          style={[
            styles.track,
            {
              width: this.itemWidth,
              marginLeft: i === 0 ? 0 : BAR_SPACE,
            },
          ]}
        >
          <Animated.View

            style={[
              styles.bar,
              {
                width: this.itemWidth,
                transform: [
                  { translateX: scrollBarVal },
                ],
              },
            ]}
          />
        </View>
      )
      barArray.push(thisBar)
    })

    return (
      <View
        style={styles.container}
        flex={1}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          pagingEnabled
          onScroll={
            Animated.event(
              [{ nativeEvent: { contentOffset: { x: this.animVal } } }],
              { useNativeDriver: true }
            )
          }
        >

          {imageArray}

        </ScrollView>
        <View
          style={styles.barContainer}
        >
          {barArray}
        </View>

        <Button title="Skip" color='#FFF3F0' onPress={() => this.props.navigation.navigate('Home')}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D5B9B2',
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 40,
    flexDirection: 'row',
  },
  track: {
    backgroundColor: '#FDF5E6',
    overflow: 'hidden',
    height: 2,
  },
  bar: {
    backgroundColor: '#B95255', 
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  button: {
      color: 'black',
  }
})


