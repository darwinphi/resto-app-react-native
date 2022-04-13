import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import CategoryItem from "./src/components/CategoryItem";

export default function App() {
  useFonts({ Inter_700Bold });

  const commonCategories = [
    { name: "Burger", imageUrl: require("./src/assets/images/burger.png") },
    { name: "Pizza", imageUrl: require("./src/assets/images/pizza.png") },
    { name: "Cake", imageUrl: require("./src/assets/images/cake.png") },
    { name: "Pasta", imageUrl: require("./src/assets/images/pasta.png") },
    { name: "Drinks", imageUrl: require("./src/assets/images/smoothies.png") },
    { name: "Steak", imageUrl: require("./src/assets/images/steak.png") },
  ];

  return (
    <View>
      <Header />
      <Search />
      <FlatList
        data={commonCategories}
        renderItem={({ item }) => {
          return <CategoryItem name={item.name} imageUrl={item.imageUrl} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />

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
