import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const BookCoverSlider = ({data}) => {
  return (
    <View>
      <Image 
        source={data.image}
        style={styles.bookCover}
      />
    </View>
  )
}

export default BookCoverSlider

const styles = StyleSheet.create({
    bookCover: {
        height: 250,
        width: 150,
        borderRadius: 8,
        resizeMode: 'contain'
    }
})