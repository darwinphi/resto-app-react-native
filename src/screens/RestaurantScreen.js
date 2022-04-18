import { useEffect } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import useRestaurant from "../hooks/useRestaurant";

export default function RestaurantScreen({ route }) {
  const { id } = route.params;
  const [{ data, loading, error }, searchRestaurant] = useRestaurant();

  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  const imageHeight = Math.round((dimensions.width * 9) / 16);

  useEffect(() => {
    searchRestaurant(id);
  }, [id]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Something went wrong.</Text>;

  return (
    <View>
      {data && (
        <FlatList
          data={data.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ height: imageHeight, width: imageWidth }}
            />
          )}
        />
      )}
    </View>
  );
}
