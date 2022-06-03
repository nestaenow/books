import { StyleSheet, Text,  View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Carousel from 'react-native-snap-carousel';
import { bestSeller, sliderData, theLatest } from '../model/data';
import BookCoverSlider from '../components/BookCoverSlider';
import { windowWidth } from '../utils/Dimensions'
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';

const HomeScreen = () => {
  const renderBookCover = ({item, index}) => {
    return <BookCoverSlider data={item}/>
  }

  const [booksTab, setBooksTab] = useState(1)

  const onSelectSwitch = (value) => {
    setBooksTab(value)
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView style={{padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={[styles.header, {backgroundColor: '#ECEAED', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 10}]}>¡Buenos días! 👋🏾</Text>
          <ImageBackground source={require('../assets/logo.png')} style={{width: 55, height: 55}}/>
        </View>


        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
          <Text style={[styles.header, {fontWeight: '800'}]}>New Releases</Text>
        </View>

        <Carousel
          // ref={(c) => { this._carousel = c; }}
          data={sliderData}
          renderItem={renderBookCover}
          sliderWidth={windowWidth - 40}
          itemWidth={150}
          loop={true}
        />

        <CustomSwitch 
          selectionMode={1} 
          option1='Best Seller' 
          option2='The Latest'
          onSelectSwitch={onSelectSwitch}
        />

        <View style={{paddingBottom: 20}}>
          {booksTab == 1 && 
            bestSeller.map(item => (
              <ListItem 
                key={item.id} 
                image={item.image} 
                title={item.title} 
                author={item.author} 
                genre={item.genre}
                pages={item.pages} 
                price={item.price}
              />
            ))
          }

          {booksTab == 2 && 
            theLatest.map(item => (
              <ListItem 
                key={item.id} 
                image={item.image} 
                title={item.title} 
                author={item.author} 
                genre={item.genre}
                pages={item.pages} 
                price={item.price}
              />
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#6B3F87',
  }
})