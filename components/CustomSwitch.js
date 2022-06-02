import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CustomSwitch = ({ selectionMode, option1, option2, onSelectSwitch }) => {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode)

    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }

  return (
    <View style={{
        height: 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#F8F8F8',
        marginBottom: 20
    }}>
      <TouchableOpacity 
        activeOpacity={1} 
        onPress={() => updateSwitchData(1)}
        style={{
            flex: 1,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center', 
            backgroundColor: getSelectionMode == 1 ? '#6B3F87' : '#F8F8F8'
        }}
      >
          <Text style={{
            color: getSelectionMode == 1 ? '#F8F8F8' : '#6B3F87',
            fontSize: 15,
            fontWeight: '700'
            }}>
                {option1}
            </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        activeOpacity={2} 
        onPress={() => updateSwitchData(2)}
        style={{
            flex: 1,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: getSelectionMode == 2 ? '#6B3F87' : 'white'}}>
          <Text style={{
            color: getSelectionMode == 2 ? 'white' : '#6B3F87',
            fontSize: 15,
            fontWeight: '700'
            }}>
                {option2}
            </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomSwitch

const styles = StyleSheet.create({})