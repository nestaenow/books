import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { windowHeight } from '../utils/Dimensions'

const BookDetailsScreen = () => {
  return (
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <SafeAreaView>
      <ScrollView>
        <View style={styles.cover}>
          <ImageBackground source={require('../assets/books/FiveFeetApart.jpg')} resizeMode="cover" blurRadius={15} style={styles.image}>
            <Image source={require('../assets/books/FiveFeetApart.jpg')} style={{width: 240 , height: 360}}/>
            <View style={styles.info}>
              <View>
                <Text style={styles.text1}>190</Text>
                <Text style={styles.text2}>Number of Pages</Text>
              </View>
              <View>
                <Text style={styles.text1}>Fantasy</Text>
                <Text style={styles.text2}>Genre</Text>
              </View>
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
    alignItems: 'center',
    width: '100%',
    height: windowHeight * 0.64,
  },
  info: {
    marginVertical: 20,
    backgroundColor: '#6B3F87',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 80,
    paddingVertical: 25,
    borderRadius: 10,
  },
  text1: {
    color: '#fff',
    fontWeight: '700',
  },
  text2: {
    color: '#fff',
    fontWeight: '200',
    fontSize: 12,
  }
})