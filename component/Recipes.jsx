import React from "react";
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

  const handleClick = (item) => {
    navigation.navigate("Description", item);
  };

  //   const Item = ({ item, title, img }) => {
  //     // const titleCheked = title.length > 12 && (`${title} + ...`)
  //     return (
  //       <TouchableOpacity onPress={() => handleClick(item)}>
  //         <View style={styles.item}>
  //           <View style={styles.recipesImgContainer}>
  //             <Image source={{ uri: img }} style={styles.recipesImg} />
  //           </View>

  //           <Text numberOfLines={1} style={styles.recipeTitle}>
  //             {title}
  //           </Text>
  //         </View>
  //       </TouchableOpacity>
  //     );
  //   };

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
        showsVerticalScrollIndicator={false}
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: wp("45%"),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    paddingVertical: hp("1%"),
  },

  recipesImg: {
    width: wp("40%"),
    height: hp("30%"),
    borderRadius: 20,
  },
  recipeTitle: {
    paddingVertical: wp("2%"),
    color: colors.WHITE,
    fontWeight: "bold",
    fontSize: hp("1.5%"),
  },
  recipesImgContainer: {
    marginVertical: wp("3%"),
  },
  //   -------------------
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: wp(4),
  },
});

export default Recipes;
