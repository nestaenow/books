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
            <Image source={require('../assets/books/FiveFeetApart.jpg')} style={{width: 200 , height: 300}}/>
            <View style={{marginVertical: 20, alignItems: 'center'}}>
              <Text style={{color: '#FFF', fontSize: 22, fontWeight: '700', marginBottom: 4}}>Five Feet Apart</Text>
              <Text style={{color: '#FFF', fontWeight: '300'}}>Mikki Daughtry && Tobias Laconis</Text>
            </View>
            <View style={styles.info}>
              <View style={styles.infos}>
                <Text style={styles.text1}>ENG</Text>
                <Text style={styles.text2}>Language</Text>
              </View>
              <View style={[styles.infos, {borderRightWidth: 0.3, borderLeftWidth: 0.3, borderColor: '#FFF', paddingHorizontal: 20}]}>
                <Text style={styles.text1}>190</Text>
                <Text style={styles.text2}>Number of Pages</Text>
              </View>
              <View style={styles.infos}>
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
    // paddingTop: 50,
    height: windowHeight * 0.64,
  },
  info: {
    backgroundColor: '#6B3F87',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%',
    paddingVertical: 25,
    borderRadius: 10,
  },
  infos: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  text2: {
    color: '#fff',
    fontWeight: '200',
    fontSize: 12,
  }
})