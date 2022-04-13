import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";
import Header from "./src/components/Header";

export default function App() {
  useFonts({ Inter_700Bold });

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef6e4",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#001858",
    fontSize: 20,
    fontFamily: "Inter_700Bold",
  },
});
