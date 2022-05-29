import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import BackButton from '../components/BackButton';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('')

    const navigation = useNavigation()

    const handleConfirm = () => {
        navigation.replace('NewPassword')
    }

    const handleBackToLogin = () => {
        navigation.replace('Login')
    }
    

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
            <BackButton onPress={handleBackToLogin}/>
            <Text style={styles.title}>Confirm Username</Text>
            <View style={styles.inputContainer}>
                <CustomInput placeholder='Username' value={username} setValue={setUsername}/>
            </View>
        
            <View style={styles.buttonContainer}>
                <CustomButton onPress={handleConfirm} text='Confirm'/>
            </View>

            <View style={styles.Revert}>
                <CustomButton onPress={handleBackToLogin} text="Back to Login" type='TERTIARY'/>
            </View>
        </View>
    </ScrollView>
  )
}

export default ForgotPasswordScreen

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