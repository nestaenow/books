import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Text, View} from 'react-native'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const NewPasswordScreen = () => {
    const [code, setCode] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace('Home')
            }
        })

        return unsubscribe
    }, [])

    const handleSubmit = () => {
        console.warn('Submit Pressed')
    }

    const handleBackToLogin = () => {
        console.warn('Back to login')
    }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style={styles.title}>Reset Password</Text>
            <View style={styles.inputContainer}>
                <CustomInput placeholder='Code' value={code} setValue={setCode}/>
                <CustomInput placeholder='Enter New Password' value={newPassword} setValue={setNewPassword}/>
            </View>
        
            <View style={styles.buttonContainer}>
                <CustomButton onPress={handleSubmit} text='Submit'/>
            </View>

            <View style={styles.Revert}>
                <CustomButton onPress={handleBackToLogin} text="Back to Login" type='TERTIARY'/>
            </View>
        </View>
    </ScrollView>
  )
}

export default NewPasswordScreen

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