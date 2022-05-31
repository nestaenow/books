import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import Feather from 'react-native-vector-icons/Feather'
import Carousel from 'react-native-snap-carousel';
import { sliderData } from '../model/data';
import BookCoverSlider from '../components/BookCoverSlider';
import { windowWidth } from '../utils/Dimensions'

const HomeScreen = () => {
  const renderBookCover = ({item, index}) => {
    return <BookCoverSlider data={item}/>
  }

  const navigation = useNavigation()

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView style={{padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
          <Text style={styles.header}>Hello Alessandro Nesta</Text>
          <ImageBackground source={require('../assets/user1.png')} style={{width: 55, height: 55}}/>
        </View>

        <View style={{flexDirection: 'row', borderColor: '#C6C6C6', borderWidth: 1, borderRadius: 8, paddingVertical: 8, paddingHorizontal: 10}}>
          <Feather name='search' size={20} color='#C6C6C6' style={{marginRight: 10}}/>
          <TextInput placeholder='Search'/>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
          <Text style={styles.header}>Spicy New books</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#6B3F87'}}>See All</Text>
          </TouchableOpacity>
        </View>

        <Carousel
          // ref={(c) => { this._carousel = c; }}
          data={sliderData}
          renderItem={renderBookCover}
          sliderWidth={windowWidth - 40}
          itemWidth={150}
          loop={true}
        />

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: '700'
  }
})