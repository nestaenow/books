import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import BackButton from '../components/BackButton';

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('')

    const navigation = useNavigation();

    const handleResend = () => {
        console.warn('Resend')
    }

    const handleConfirm = () => {
        navigation.replace('Login')
    }

  return (
    <SafeAreaView>
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <BackButton onPress={() => navigation.goBack()} color='#6B3F87'/>
                <Text style={styles.title}>Confirm Email</Text>

                <View style={styles.inputContainer}>
                    <CustomInput placeholder='Enter Confirmation Code' value={code} setValue={setCode} logo={require('../assets/barcode.png')}/>
                </View>
            
                <View style={styles.buttonContainer}>
                    <CustomButton onPress={handleConfirm} text=' Confirm'/>
                    <CustomButton onPress={handleResend} text="Resend Code" type='SECONDARY'/>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ConfirmEmailScreen

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
    text: {
        color: '#747474',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075'
    },
})