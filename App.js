import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";
import Header from "./src/components/Header";
import Search from "./src/components/Search";

export default function App() {
  useFonts({ Inter_700Bold });

  return (
    <View>
      <Header />
      <Search />
      <StatusBar style="auto" />
    </View>
  );
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
