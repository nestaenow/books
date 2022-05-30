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
      <Tab.Screen name='Home' component={HomeScreen} screenOptions = {{ tabBarIcon: ({ focused }) => {
        const image = focused
        ? require('../assets/HomeActive.png')
        : require('../assets/HomeInactive.png')
        return (
            <Image
                source={image}
                style={{height:20, width:20}}
            />
        )
    }}}/>
      <Tab.Screen name='SerachBook' component={SearchBookScreen}/>
      <Tab.Screen name='Books' component={BooksScreen}/>
      <Tab.Screen name='Menu' component={MenuScreen}/>
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})