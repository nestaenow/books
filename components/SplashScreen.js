import React from 'react';
import { StyleSheet, View, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const SplashScreen = () => {

  const navigation = useNavigation()

  setTimeout(() => {
    navigation.replace('Land')
  }, 3000);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6B3F87',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    logo: {
      width: 98,
      height: 98,
    },
});

export default SplashScreen