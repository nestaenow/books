import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type="PRIMARY", bgColor, fgColor }) => {
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={[
            styles.button, 
            styles[`button_${type}`],
            bgColor ? {backgroundColor: bgColor} : {},
        ]}>
        <Image 
            source={require('../assets/menu.png')}
            style={styles.apple} 
        />
        <Text style={[
            styles.buttonText, 
            styles[`buttonText_${type}`],
            fgColor ? {color: fgColor} : {},
        ]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 5,
    },
    button_PRIMARY: {
        backgroundColor: '#6B3F87',
    },
    button_TERTIARY: {
        marginVertical: 0,
        padding: 3,
    },
    button_SECONDARY: {
        borderColor: '#6B3F87',
        borderWidth: 2,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonText_TERTIARY: {
        color: '#C4C4C4',
        fontWeight: '500',
        fontSize: 14,
    },
    buttonText_SECONDARY: {
        color: '#6B3F87',
        fontWeight: '500',
        fontSize: 14,
    },
    apple: {
        height: 10,
        width: 10,
    }
})