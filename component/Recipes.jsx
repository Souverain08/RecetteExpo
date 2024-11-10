import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../constant/Constant";
import { useNavigation } from "@react-navigation/native";
import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from "./ImageCard";

const Recipes = ({ recipeChekedData }) => {
  const navigation = useNavigation();
  const [imageHeights, setImageHeights] = useState({});

  const handleClick = (item) => {
    navigation.navigate("Description", item);
  };

  useEffect(() => {
    // Calculer les hauteurs de toutes les images

    recipeChekedData.forEach((image, index) => {
      Image.getSize(image?.strMealThumb, (width, height) => {
        const screenWidth = Dimensions.get("window").width;
        const calculatedHeight = (screenWidth / 2 / width) * height;
        setImageHeights((prev) => ({
          ...prev,
          [index]: calculatedHeight,
        }));
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={recipeChekedData}
        renderItem={({ item }) => (
          <Item item={item} img={item.strMealThumb} title={item.strMeal} />
        )}
        keyExtractor={(item) => item.idMeal}
        horizontal={false}
        numColumns={2}
        
      /> */}
      <MasonryFlashList
        data={recipeChekedData}
        initialNumToRender={1000}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
        renderItem={({ item, index }) => (
          <ImageCard item={item} index={index} />
        )}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //   -------------------
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: wp(4),
  },
});

export default Recipes;
