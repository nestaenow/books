import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import Feather from 'react-native-vector-icons/Feather'
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

  const navigation = useNavigation()

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F8F8F8'}}>
      <ScrollView style={{padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={styles.header}>Hello Alessandro Nesta</Text>
          <ImageBackground source={require('../assets/user1.png')} style={{width: 55, height: 55}}/>
        </View>


        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
          <Text style={styles.header}>New Releases</Text>
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
    color: '#6B3F87'
  }
})