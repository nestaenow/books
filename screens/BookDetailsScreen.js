import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { windowHeight } from '../utils/Dimensions'

const BookDetailsScreen = () => {
  return (
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <SafeAreaView>
      <ScrollView>
        <View style={styles.cover}>
          <ImageBackground source={require('../assets/books/FiveFeetApart.jpg')} resizeMode="cover" style={styles.image}>
            {/* <Image source={require('../assets/books/FiveFeetApart.jpg')} style={{width: 240 , height: 360}}/> */}
            <View style={{opacity:1}}>
              <Text style={styles.text}>yfgjvjgvkhvkhgvogvnfgnjfn</Text>
            </View>
            
          </ImageBackground>
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default BookDetailsScreen

const styles = StyleSheet.create({
  cover: {
    // paddingVertical: 80,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6B3F87',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: windowHeight * 0.64,
    opacity: 0.3
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  }
})