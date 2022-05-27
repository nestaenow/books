import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Text, View, Keyboard } from 'react-native'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/core';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace('Home')
            }
        })

        return unsubscribe
    }, [])

    const handleConfirm = () => {
        Keyboard.dismiss();
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with', user.email);
            })
            .catch(error => alert(error.message))
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
            <Text style={styles.title}>Reset Password</Text>
            <View style={styles.inputContainer}>
                <CustomInput placeholder='Username' value={username} setValue={setUsername}/>
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