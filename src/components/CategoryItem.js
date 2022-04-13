import { StyleSheet, Text, View, Image } from "react-native";

export default function CategoryItem({ name, imageUrl }) {
  return (
    <View style={[styles.container]}>
      <View style={styles.imageContainer}>
        <Image source={imageUrl} style={styles.image} />
      </View>
      <Text style={styles.header}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    marginHorizontal: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.1,
    padding: 15,
    borderRadius: 40,
  },
  elevation: 3,
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  header: {
    fontWeight: "bold",
  },
});
