import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { windowHeight } from '../utils/Dimensions'
import BackButton from '../components/BackButton'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const BookDetailsScreen = () => {
  const navigation = useNavigation()

  const handleBack = () => {
    navigation.navigate('Home')
  }
  return (
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <SafeAreaView>
      <ScrollView>
          <ImageBackground source={require('../assets/books/FiveFeetApart.jpg')} resizeMode="cover" blurRadius={15} style={styles.image}>
            <BackButton onPress={handleBack} color='#FFF'/>
            <Text style={[styles.text1, {marginVertical: 33}]}>Book Detals</Text>
            <Image source={require('../assets/books/FiveFeetApart.jpg')} style={{width: 200 , height: 300, resizeMode: 'contain'}}/>
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
        <View style={{flexDirection: 'row', marginHorizontal: 30, justifyContent: 'space-between'}}>
          <View style={{width: '80%'}}>
            <Text style={{color: '#6B3F87', fontSize: 25, fontWeight: '700', marginBottom: 4}}>Description</Text>
            <ScrollView style={{height: 84}}>
              <Text style={[styles.text2, {color: '#000', fontSize: 17}]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente numquam nobis nihil inventore harum commodi voluptas. Omnis, asperiores placeat nesciunt accusantium rerum quos molestias? Eaque sunt animi officia impedit.Molestias sapiente numquam nobis nihil inventore harum commodi voluptas. Omnis, asperiores placeat nesciunt accusantium rerum quos molestias? Eaque sunt animi officia impedit.</Text>
            </ScrollView>
          </View>
          <AntDesign name={'hearto'} size={27} color='#6B3F87' style={{marginRight: 5}}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default BookDetailsScreen

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
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