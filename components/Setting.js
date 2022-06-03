import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

const Profile = ({screen, text,}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)} style={{paddingVertical: 20, borderBottomWidth: 2, borderColor: '#A791B5'}}>
        <Text style={{fontSize: 20, fontWeight: '500', color: '#A791B5'}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Profile

const styles = StyleSheet.create({})