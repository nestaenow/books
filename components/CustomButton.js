import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type="PRIMARY", bgColor, logo, fgColor }) => {
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={[
            styles.button, 
            styles[`button_${type}`],
            bgColor ? {backgroundColor: bgColor} : {},
            styles.container
        ]}>
        <Image 
            source={logo ? logo : {}}
            style={styles.logoIcon} 
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
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
    logoIcon: {
        height: 18,
        width: 18,
        marginLeft: 2
    }
})