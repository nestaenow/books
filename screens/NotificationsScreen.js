import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground} from "react-native";
import React, { useState } from "react";
import Notification from "../components/Notification";

const NotificationsScreen = () => {
const [booksTab, setBooksTab] = useState(1)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView style={{ marginHorizontal: 30 }}>
        <Text style={styles.header}>Notifications</Text>
        <Notification icon='information-circle-outline' text='There are 17 New books 😁. You might want to check them out.' time='2min' type='recent'/>
        <Notification icon='heart' text='You liked "Men in Black"' time='4h' type='recent'/>
        <Notification icon='information-circle-outline' text='You might like "Resident evil"' time='19h' type='recent'/>
        <Notification icon='heart' text='There are 3 New books 😁. You might want to check them out.' time='Yesterday'/>
        <Notification icon='heart' text='Books are on discount. Check them out.' time='Yesterday'/>
        <Notification icon='information-circle-outline' text="There's a New book. La LLorona " time='Yesterday'/>
        <Notification icon='checkmark-circle' text='You just verified your account' time='29/05'/>
        <Notification icon='person-outline' text='You registered as a buyer' time='29/05'/>
        <Notification icon='star' text='Welcome to Libro' time='29/05'/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default NotificationsScreen

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: '700',
    color: '#6B3F87',
    marginTop: 30,
    marginBottom: 12
  },
})