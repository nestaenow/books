import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowWidth } from '../utils/Dimensions';

const GenreTags = ({ genre }) => {
    const text = genre;
  return (
    <View style={[
        styles[`book_${genre}`],
        styles.book
    ]}>
      <Text style={[styles.text, styles[`bookText_${genre}`]]}>
        {text}
      </Text>
    </View>
  )
}

export default GenreTags

const styles = StyleSheet.create({
    text: {
        fontSize: 10,
        fontWeight: '700',
    },
    book: {
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 3,
        width: windowWidth * 0.155,
        alignItems: 'center'
    },
    book_Thriller: {
        backgroundColor: '#760303',
    },
    book_Adventure: {
        backgroundColor: '#99FF88',
    },
    book_Romance: {
        backgroundColor: '#FF9B9B',
    },
    book_Horror: {
        backgroundColor: '#A6A6A6',
    },
    book_Fantasy: {
        backgroundColor: '#78CFFF',
    },
    bookText_Thriller: {
        color: '#FFFFFF',
    },
    bookText_Adventure: {
        color: '#107300',
    },
    bookText_Romance: {
        color: '#DA0202',
    },
    bookText_Horror: {
        color: '#000000',
    },
    bookText_Fantasy: {
        color: '#0368A0',
    }
})