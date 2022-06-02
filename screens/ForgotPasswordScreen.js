import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Text, View, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import BackButton from '../components/BackButton';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('')

    const navigation = useNavigation()

    const handleConfirm = () => {
        navigation.navigate('NewPassword')
    }

    const handleBackToLogin = () => {
        navigation.navigate('Login')
    }
    

  return (
    <SafeAreaView>
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <BackButton onPress={() => navigation.goBack()} color='#6B3F87'/>
                <Text style={styles.title}>Confirm Username</Text>
                <View style={styles.inputContainer}>
                    <CustomInput placeholder='Username' value={username} setValue={setUsername} logo={require('../assets/user.png')}/>
                </View>
            
                <View style={styles.buttonContainer}>
                    <CustomButton onPress={handleConfirm} text='Confirm'/>
                </View>

                <View style={styles.Revert}>
                    <CustomButton onPress={handleBackToLogin} text="Back to Login" type='TERTIARY'/>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
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