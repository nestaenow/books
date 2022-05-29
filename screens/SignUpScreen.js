import React, { useState } from 'react'
import { StyleSheet, ScrollView, Text, View, } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialButton from '../components/SocialButton';
import BackButton from '../components/BackButton';

const SignUpScreen = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const navigation = useNavigation()

    const handleSignUp = () => {
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

    const handleBack = () => {
        navigation.replace('Login')
    }

    const handleSignUpWithFacebook = () => {
        console.warn('Facebook')
    }

    const handleSignUpWithGoogle = () => {
        console.warn('Google')
    }
    
    const handleSignUpWithApple = () => {
        console.warn('Apple')
    }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
            <BackButton onPress={handleBack}/>
            <Text style={styles.title}>Create an account</Text>
            <View style={styles.inputContainer}>
                <CustomInput placeholder='Username' value={username} setValue={setUsername} logo={require('../assets/user.png')}/>
                <CustomInput placeholder='Email' value={email} setValue={setEmail} logo={require('../assets/envelope.png')}/>
                <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry logo={require('../assets/lock.png')}/>
                <CustomInput placeholder='Confirm Password' value={passwordConfirm} setValue={setPasswordConfirm} secureTextEntry logo={require('../assets/lock.png')}/>
            </View>
        
            <View style={styles.buttonContainer}>
                <CustomButton onPress={handleSignUp} text=' Register'/>
                <Text style={styles.text} >By registering, you confirm that you accept our <Text style={styles.link} onPress={handleTermsOfUse}>Terms of use</Text> and <Text style={styles.link} onPress={handlePrivacyPolicy}>Privacy Policy</Text> </Text>
            </View>

            <View style={styles.SocialSignUp}>
                <SocialButton onPress={handleSignUpWithFacebook} text='SignUp with Facebook' bgColor='#E7EAF4' fgColor='#4765A9' logo={require('../assets/Facebook.png')}/>
                <SocialButton onPress={handleSignUpWithGoogle} text='SignUp with Google' bgColor='#FAE9EA' fgColor='#DD4D44' logo={require('../assets/Google.png')}/>
                <SocialButton onPress={handleSignUpWithApple} text='SignUp with Apple' bgColor='#E3E3E3' fgColor='#363636' logo={require('../assets/Apple.png')}/>
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
        marginTop: 100,
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
        marginTop: 75
    },
})