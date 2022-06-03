import { StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";
import React from "react";
import Setting from "../components/Setting"

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF"}}>
      <ScrollView style={{ marginHorizontal: 30 }}>
        <Text style={styles.header}>Settings</Text>
        <View>
          <Setting text='Profile' screen='Profile'/>
          <Setting text='Suggestions' screen='Suggestions'/>
          <Setting text='See terms and privacy' screen='TermsAndPrivacy'/>
          <Setting text='Get Help' screen='Help'/>
          <Setting text='Log out' screen='Login'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SettingsScreen

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: '700',
    color: '#6B3F87',
    marginTop: 30,
    marginBottom: 12
  },
})