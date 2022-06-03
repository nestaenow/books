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
      <Text style={styles.header}>Search for a book</Text>
      <View style={{height: 60}}>
        <CustomInput placeholder='' value={search} setValue={setSearch} logo={require('../assets/search.png')}/>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} style={{ paddingTop: 10}}>
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
    // alignItems: 'center',
    marginHorizontal: 20
  },
  header: {
    fontSize: 25,
    fontWeight: '700',
    color: '#6B3F87',
    marginTop: 30,
  },
})