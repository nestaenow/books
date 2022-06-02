import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const BackButton = ({ onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backButtonContainer}>
      <AntDesign name='arrowleft' size={25} color={color} style={{marginRight: 10}}/>
        {/* <Image source={require('../assets/back.png')} style={styles.backButton}/> */}
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    backButtonContainer: {
        position: 'absolute',
        left: 25,
        top: 30
    },
    backButton: {
        width: 20,
        height: 20,
    }
})