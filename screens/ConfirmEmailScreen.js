import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Text, View, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('')

    const handleConfirm = () => {
        console.warn('Confirm')
    }

    const handleResend = () => {
        console.warn('Resend')
    }

    const handleBackToLogin = () => {
        console.warn('Back to login')
    }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style={styles.title}>Confirm Email</Text>

            <View style={styles.inputContainer}>
                <CustomInput placeholder='Enter Confirmation Code' value={code} setValue={setCode}/>
            </View>
        
            <View style={styles.buttonContainer}>
                <CustomButton onPress={handleConfirm} text=' Confirm'/>
                <CustomButton onPress={handleResend} text="Resend Code" type='SECONDARY'/>
            </View>

            <View style={styles.Revert}>
                <CustomButton onPress={handleBackToLogin} text="Back to Login" type='TERTIARY'/>
            </View>
        </View>
    </ScrollView>
  )
}

export default ConfirmEmailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#6B3F87',
        marginTop: 120,
        marginBottom: 20,
    },
    inputContainer: {
        width: '80%',
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    text: {
        color: '#747474',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075'
    },
    Revert: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
})