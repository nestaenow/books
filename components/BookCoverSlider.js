import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const BookCoverSlider = ({data}) => {
  return (
    <View>
      <Image 
        source={data.image}
        style={{height: 300, width: 150, borderRadius: 8, resizeMode: 'contain'}}
      />
    </View>
  )
}

export default BookCoverSlider

const styles = StyleSheet.create({})