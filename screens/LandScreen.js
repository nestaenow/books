import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

const LandScreen = () => {

  const navigation = useNavigation()

  const handleSignUpBuyer = () => {
    navigation.navigate('SignUp')
  }
  
  const handleSignUpSeller = () => {
    navigation.navigate('SignUpBuyer')
  }
  
  return (
      <ImageBackground source={require('../assets/land.jpg')} resizeMode='cover' style={styles.container} blurRadius={5}>
        <TouchableOpacity onPress={handleSignUpBuyer} style={styles.button}>
          <Text style={styles.buttonText}>Looking for a Book?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUpSeller} style={styles.button}>
          <Text style={styles.buttonText}>Want to sell a Book?</Text>
        </TouchableOpacity>
      </ImageBackground>
  )
}

export default LandScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
      backgroundColor: '#6B3F87',
      width: '70%',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      margin: 20,
  },
  buttonText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 20,
  }
})