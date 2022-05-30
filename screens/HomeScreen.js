import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Text>Hello Alessandro Nesta</Text>
          <ImageBackground source={require('../assets/user1.png')} style={{width: 35, height: 35}}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

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