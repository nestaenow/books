import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

const Suggestion = () => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Suggestions')}>
        <Text>Make a Suggestion</Text>
    </TouchableOpacity>
  )
}

export default Suggestion

const styles = StyleSheet.create({})