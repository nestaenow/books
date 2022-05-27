import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View>
      <TextInput 
            placeholder={placeholder} 
            value={value} 
            onChangeText={text => setValue(text)}
            style={styles.input}
            secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginTop: 8,
    },
})