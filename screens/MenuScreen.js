import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Suggestion from "../components/Suggestion";

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView style={{ marginHorizontal: 30 }}>
        <Text style={styles.header}>Settings</Text>
        <Suggestion/>
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