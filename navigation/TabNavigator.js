import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchBookScreen from '../screens/SearchBookScreen';
import BooksScreen from '../screens/BooksScreen';
import MenuScreen from '../screens/MenuScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator style = {styles.tabNavigator} screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <Tab.Screen name='Home' component={HomeScreen} options = {{ tabBarIcon: ({ focused }) => {
        const image = focused
        ? require('../assets/HomeActive.png')
        : require('../assets/HomeInactive.png')
        return (
            <Image
                source={image}
                style={{height:24, width:24, resizeMode: 'contain'}}
            />
        )
    }}}/>
      <Tab.Screen name='SerachBook' component={SearchBookScreen} options = {{ tabBarIcon: ({ focused }) => {
        const image = focused
        ? require('../assets/SearchActive.png')
        : require('../assets/SearchInactive.png')
        return (
            <Image
                source={image}
                style={{height:24, width:24, resizeMode: 'contain'}}
            />
        )
    }}}/>
      <Tab.Screen name='Books' component={BooksScreen} options = {{ tabBarBadge: 3, tabBarIcon: ({ focused }) => {
        const image = focused
        ? require('../assets/BooksActive.png')
        : require('../assets/BooksInactive.png')
        return (
            <Image
                source={image}
                style={{height:24, width:24, resizeMode: 'contain'}}
            />
        )
    }}}/>
      <Tab.Screen name='Menu' component={MenuScreen} options = {{ tabBarIcon: ({ focused }) => {
        const image = focused
        ? require('../assets/MenuActive.png')
        : require('../assets/MenuInactive.png')
        return (
            <Image
                source={image}
                style={{height:24, width:24, resizeMode: 'contain'}}
            />
        )
    }}}/>
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})