import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Text, View, SafeAreaView} from 'react-native'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import BackButton from '../components/BackButton';

const NewPasswordScreen = () => {
    const [code, setCode] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const navigation = useNavigation()

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         if (user) {
    //             navigation.replace('Home')
    //         }
    //     })

    //     return unsubscribe
    // }, [])

    const handleSubmit = () => {
        navigation.navigate('Login')
    }

    const handleResend = () => {
        console.warn('Resend')
    }

    const handleBackToLogin = () => {
        navigation.navigate('Login')
    }

  return (
    <SafeAreaView>
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <BackButton onPress={() => navigation.goBack()} color='#6B3F87'/>
                <Text style={styles.title}>Reset Password</Text>
                <View style={styles.inputContainer}>
                    <CustomInput placeholder='Enter Code' value={code} setValue={setCode} logo={require('../assets/barcode.png')}/>
                    <CustomInput placeholder='Enter New Password' value={newPassword} setValue={setNewPassword} logo={require('../assets/lock.png')}/>
                </View>
            
                <View style={styles.buttonContainer}>
                    <CustomButton onPress={handleSubmit} text='Submit'/>
                    <CustomButton onPress={handleResend} text="Resend Code" type='SECONDARY'/>
                </View>

                <View style={styles.Revert}>
                    <CustomButton onPress={handleBackToLogin} text="Back to Login" type='TERTIARY'/>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
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
        marginTop: 50,
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
    Revert: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
})