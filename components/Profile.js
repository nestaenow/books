import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

const Profile = () => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => {}} style={{paddingVertical: 20, borderBottomWidth: 2, borderColor: '#A791B5'}}>
        <Text style={{fontSize: 20, fontWeight: '500', color: '#A791B5'}}>Profile</Text>
    </TouchableOpacity>
  )
}

export default Profile

const styles = StyleSheet.create({})