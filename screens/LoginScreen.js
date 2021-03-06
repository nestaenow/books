import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Image, View, useWindowDimensions, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Logo from '../assets/logoWtext.png';
import SocialButton from '../components/SocialButton';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {height} = useWindowDimensions()

    const navigation = useNavigation()

    const handleLogin = () => {
        navigation.navigate('Home')
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
        navigation.navigate('Land')
    }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
            <Image 
                source={Logo} 
                style={[styles.logo, {height : height * 0.0953}]}
                resizeMode='contain'
            />
            <View style={styles.inputContainer}>
                <CustomInput placeholder='Email' value={email} setValue={setEmail} logo={require('../assets/user.png')}/>
                <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry logo={require('../assets/lock.png')}/>
            </View>
        
            <View style={styles.buttonContainer}>
                <CustomButton onPress={handleLogin} text='Login'/>
                <CustomButton onPress={handleForgotPassword} text='Forgot Password' type='TERTIARY'/>
            </View>

            <View style={styles.SocialLogin}>
                <SocialButton onPress={handleLoginWithFacebook} text='Login with Facebook' bgColor='#E7EAF4' fgColor='#4765A9' logo={require('../assets/Facebook.png')}/>
                <SocialButton onPress={handleLoginWithGoogle} text='Login with Google' bgColor='#FAE9EA' fgColor='#DD4D44' logo={require('../assets/Google.png')}/>
                <SocialButton onPress={handleLoginWithApple} text='Login with Apple' bgColor='#E3E3E3' fgColor='#363636' logo={require('../assets/Apple.png')}/>
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
        display: 'flex',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    SocialLogin: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 75
    }
})