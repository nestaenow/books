import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const SocialSignInButtons = () => {
    
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
    <>
        <CustomButton onPress={handleSignUpWithFacebook} text='SignUp with Facebook' bgColor='#E7EAF4' fgColor='#4765A9'/>
        <CustomButton onPress={handleSignUpWithGoogle} text='SignUp with Google' bgColor='#FAE9EA' fgColor='#DD4D44'/>
        <CustomButton onPress={handleSignUpWithApple} text='SignUp with Apple' bgColor='#E3E3E3' fgColor='#363636'/>
    </>
  )
}

export default SocialSignInButtons

const styles = StyleSheet.create({})