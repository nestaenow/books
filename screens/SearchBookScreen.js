import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import CustomInput from '../components/CustomInput'
import { bestSeller, theLatest } from '../model/data';
import ListItem from '../components/ListItem';

const SearchBookScreen = () => {
  const [search, setSearch] = useState('')

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 60}}>
        <CustomInput placeholder='Search' value={search} setValue={setSearch} logo={require('../assets/search.png')}/>
      </View>
      <ScrollView style={{paddingHorizontal: 20, paddingTop: 10, width: '100%'}}>
        <View style={{marginBottom: 75}}>
          {bestSeller.map(item => (
              <ListItem 
                key={item.id} 
                image={item.image} 
                title={item.title} 
                author={item.author} 
                genre={item.genre}
                pages={item.pages} 
                price={item.price}
              />
            ))}
          {theLatest.map(item => (
              <ListItem 
                key={item.id} 
                image={item.image} 
                title={item.title} 
                author={item.author} 
                genre={item.genre}
                pages={item.pages} 
                price={item.price}
              />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchBookScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
})