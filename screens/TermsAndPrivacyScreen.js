import React from 'react';
import { StyleSheet, ScrollView, Text, View, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import BackButton from '../components/BackButton';

const TermsAndPrivacyScreen = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <BackButton onPress={() => navigation.goBack()} color='#6B3F87'/>
                <Text style={styles.title}>Ooops! There's Nothing Here Yet!</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default TermsAndPrivacyScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '80%'
    },
    title: {
        fontSize: 20,
        fontWeight: '300',
        color: '#6B3F87',
        marginTop: 50,
        marginBottom: 20,
    },
})