import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground} from "react-native";
import React, { useState } from "react";
import { theLatest } from '../model/data';
import ListItem from '../components/ListItem';

const BooksScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 30 }}>
        <Text style={styles.header}>My Books</Text>
        <View style={{marginBottom: 75}}>
          {theLatest.map(item => (
              <ListItem 
                key={item.id} 
                image={item.image} 
                title={item.title} 
                author={item.author} 
                genre={item.genre}
                pages={item.pages} 
                price={item.price}
              />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default BooksScreen

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: '700',
    color: '#6B3F87',
    marginTop: 30,
    marginBottom: 12
  },
})
