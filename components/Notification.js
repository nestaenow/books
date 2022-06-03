import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Notification = ({ icon, text, time, type='old' }) => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name={icon} size={20} color='#6B3F87'/>
            <Text style={[styles.normal, styles[`notification_${type}`], {marginLeft: 15, width: '70%'}]}>{text}</Text>
        </View>
        <View>
            <Text style={[styles.normal, styles[`notificationTime_${type}`]]}>{time}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Notification

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginVertical: 8
    },
    notificationTime_old: {
        fontWeight: '200'
    },
    notificationTime_recent: {
        fontWeight: '400'
    },
    normal: {
        fontSize: 16,
    },
    notification_recent: {
        fontWeight: '600',
    },
    notification_old: {
        fontWeight: '400',
    }
})