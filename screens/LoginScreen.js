import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Image, View, useWindowDimensions, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Logo from '../assets/logoWtext.png';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {height} = useWindowDimensions()

    const navigation = useNavigation()

    const handleLogin = () => {
        navigation.replace('Home')
    }

    const handleForgotPassword = () => {
        navigation.replace('ForgotPassword')
    }

    const handleLoginWithFacebook = () => {
        console.warn('Facebook')
    }

    const handleLoginWithGoogle = () => {
        console.warn('Google')
    }
    
    const handleLoginWithApple = () => {
        console.warn('Apple')
    }

    const handleSignUp = () => {
        navigation.replace('SignUp')
    }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
            <Image 
                source={Logo} 
                style={[styles.logo, {height : height * 0.0953}]}
            />
            <View style={styles.inputContainer}>
                <CustomInput placeholder='Email' value={email} setValue={setEmail}/>
                <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry/>
            </View>
        
            <View style={styles.buttonContainer}>
                <CustomButton onPress={handleLogin} text='Login'/>
                <CustomButton onPress={handleForgotPassword} text='Forgot Password' type='TERTIARY'/>
            </View>

            <View style={styles.SocialLogin}>
                <CustomButton onPress={handleLoginWithFacebook} text='Login with Facebook' bgColor='#E7EAF4' fgColor='#4765A9'/>
                <CustomButton onPress={handleLoginWithGoogle} text='Login with Google' bgColor='#FAE9EA' fgColor='#DD4D44'/>
                <CustomButton onPress={handleLoginWithApple} text='Login with Apple' bgColor='#E3E3E3' fgColor='#363636'/>
                <CustomButton onPress={handleSignUp} text="Don't have an account? Create One" type='TERTIARY'/>
            </View>
        </View>
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    logo: {
        marginVertical: 115,
        width: '40%',
        maxWidth: 300,
        maxHeight: 200,
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
    SocialLogin: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    }
})