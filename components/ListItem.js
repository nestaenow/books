import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import GenreTags from './GenreTags'
import Foundation from 'react-native-vector-icons/Foundation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const ListItem = ({image, title, author, pages, genre, price}) => {
    const image1 = image
    const title1 = title
    const author1 = author
    const pages1 = pages
    const genre1 = genre
    const price1 = price
    const navigation = useNavigation()

    const [like, setLike] = useState('hearto')
    // const [likeOn, setLikeOn] = useState(false)
    const onPressHandler = () => {
        setLike('heart')
    }
  return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5}}>
      <TouchableOpacity 
        onPress={() => navigation.navigate('BookDetails')} 
        style={{flex: 1, flexDirection: 'row'}}
      >
        <Image source={image} style={{width: 66.5 , height: 100, borderRadius: 5, marginRight: 10, }}/>
        <View style={{marginVertical: 10, justifyContent: 'space-between'}}>
            <View>
                <Text style={{fontSize: 20, fontWeight: '500', color: '#6B3F87'}}>{title}</Text>
                <Text style={{fontSize: 15, color: '#C4C4C4', fontWeight: '500'}}>{author}</Text>
            </View>
            <View>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 8}}>
                    <Foundation name='page-multiple' size={15} color='#6B3F87' style={{marginRight: 5}}/>
                    <Text style={{color: '#6B3F87', fontWeight: '700'}}>{pages}p</Text>
                </View>
                <GenreTags genre={genre}/>
            </View>
        </View>
      </TouchableOpacity>

      <View style={{justifyContent: 'space-between', alignItems: 'flex-end', marginVertical: 10,}}>
        <TouchableOpacity onPress={onPressHandler}>
            <AntDesign name={like} size={20} color='#6B3F87' style={{marginRight: 5}}/>
        </TouchableOpacity>
        <View>
            <Text style={{fontSize: 15, fontWeight: '700', color: '#6B3F87'}}>{price}</Text>
        </View>
      </View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({})