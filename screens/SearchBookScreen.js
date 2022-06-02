import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import CustomInput from '../components/CustomInput'

const SearchBookScreen = () => {
  const [search, setSearch] = useState('')

  const navigation = useNavigation()

  const handleSignOut = () => {
    navigation.replace('Login')
  }

  return (
    <View style={styles.container}>
      <CustomInput placeholder='Search' value={search} setValue={setSearch} logo={require('../assets/search.png')}/>
      <Text>Search Book Screen</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SearchBookScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
      backgroundColor: '#6B3F87',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 20,
  },
  buttonText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 16,
  }
})