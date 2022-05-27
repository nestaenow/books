import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Text, View, useWindowDimensions, Keyboard } from 'react-native'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/core';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';

const SignUpScreen = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const navigation = useNavigation()

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         if (user) {
    //             navigation.replace('Home')
    //         }
    //     })

    //     return unsubscribe
    // }, [])

    const handleSignUp = () => {
        // Keyboard.dismiss();
        // signInWithEmailAndPassword(auth, email, password)
        //     .then(userCredentials => {
        //         const user = userCredentials.user;
        //         console.log('Logged in with', user.email);
        //     })
        //     .catch(error => alert(error.message))

        //Register User

        navigation.replace('ConfirmEmail')
    }

    const handleTermsOfUse = () => {
        console.warn('Terms Of Use Pressed')
    }

    const handlePrivacyPolicy = () => {
        console.warn('Privacy Policy Pressed')
    }

    const handleLogin = () => {
        navigation.replace('Login')
    }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
            <Text style={styles.title}>Create an account</Text>
            <View style={styles.inputContainer}>
                <CustomInput placeholder='Username' value={username} setValue={setUsername}/>
                <CustomInput placeholder='Email' value={email} setValue={setEmail}/>
                <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry/>
                <CustomInput placeholder='Confirm Password' value={passwordConfirm} setValue={setPasswordConfirm} secureTextEntry/>
            </View>
        
            <View style={styles.buttonContainer}>
                <CustomButton onPress={handleSignUp} text=' Register'/>
                <Text style={styles.text} >By registering, you confirm that you accept our <Text style={styles.link} onPress={handleTermsOfUse}>Terms of use</Text> and <Text style={styles.link} onPress={handlePrivacyPolicy}>Privacy Policy</Text> </Text>
            </View>

            <View style={styles.SocialSignUp}>
                <SocialSignInButtons/>
                <CustomButton onPress={handleLogin} text="Have an account? Login" type='TERTIARY'/>
            </View>
        </View>
    </ScrollView>
  )
}

export default SignUpScreen

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
    SocialSignUp: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
})