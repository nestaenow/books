import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backButtonContainer}>
        <Image source={require('../assets/back.png')} style={styles.backButton}/>
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    backButtonContainer: {
        position: 'absolute',
        left: 25,
        top: 80
    },
    backButton: {
        width: 20,
        height: 20,
    }
})