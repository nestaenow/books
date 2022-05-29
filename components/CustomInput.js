import { StyleSheet, TextInput, View, Image } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, logo, secureTextEntry}) => {
  const path = logo
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={path} style={{height: 20, width: 20}}/>
      </View>
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
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'row',
    borderColor: '#C4C4C4',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 8,
  },
  imageContainer:{
    padding: 15,
    borderColor: '#c4c4c4',
    borderRightWidth: 1
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
})