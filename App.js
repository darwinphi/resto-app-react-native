import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  useFonts({ Inter_700Bold });

  return <HomeScreen />;
}
