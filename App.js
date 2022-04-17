import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import Categories from "./src/components/Categories";
import { useState } from "react";
import Restaurants from "./src/components/Restaurants";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  useFonts({ Inter_700Bold });

  return <HomeScreen />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fef6e4",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "#001858",
//     fontSize: 20,
//     fontFamily: "Inter_700Bold",
//   },
// });
