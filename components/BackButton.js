import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const BackButton = ({ onpress }) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.backButtonContainer}>
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