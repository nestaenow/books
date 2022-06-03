import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchBookScreen from '../screens/SearchBookScreen';
import BooksScreen from '../screens/BooksScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import MenuScreen from '../screens/MenuScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
      style = {styles.tabNavigator} 
      screenOptions={{ 
        tabBarShowLabel: false, 
        headerShown: false,
        tabBarActiveTintColor: '#6B3F87',
        tabBarInactiveTintColor: '#A791B5'
      }}
    >

      <Tab.Screen 
        name='Home2' 
        component={HomeScreen}
        options = {{ tabBarIcon: ({color, size}) => (
          <Ionicons name='home-outline' color={color} size={size}/>
        )}}
      />

      <Tab.Screen 
        name='SerachBook' 
        component={SearchBookScreen}
        options = {{ tabBarIcon: ({color, size}) => (
          <Ionicons name='search' color={color} size={size}/>
        )}}
      />
      <Tab.Screen 
        name='Books'
        component={BooksScreen}
        options = {{ tabBarBadge: 4, tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name='bookshelf' color={color} size={size}/>
        )}}
      />
      <Tab.Screen 
        name='Notification'
        component={NotificationsScreen}
        options = {{ tabBarBadge: 3, tabBarIcon: ({color, size}) => (
          <Ionicons name='ios-notifications-outline' color={color} size={size}/>
        )}}
      />
      <Tab.Screen 
        name='Menu' 
        component={MenuScreen}
        options = {{ tabBarIcon: ({color, size}) => (
          <Ionicons name='settings-outline' color={color} size={size}/>
        )}}
      />
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})
// options = {{ tabBarIcon: ({ focused }) => {
//         const image = focused
//         ? require('../assets/SearchActive.png')
//         : require('../assets/SearchInactive.png')
//         return (
//             <Image
//                 source={image}
//                 style={{height:24, width:24, resizeMode: 'contain'}}
//             />
//         )
//     }}}