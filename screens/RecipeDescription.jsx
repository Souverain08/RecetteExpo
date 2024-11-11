import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors, recipe } from "../constant/Constant";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Recipes from "../component/Recipes";

const RecipeDescription = ({ route }) => {
  const { img, title } = route.params;
  const [recipeChekedData, setRecipeChekedData] = useState([]);
  useEffect(() => {
    handleCheked(title);
  }, []);
  const handleCheked = (recipeCheked) => {
    const filterCategory = recipe.filter(
      (val) => val.strCategory == recipeCheked
    );
    setRecipeChekedData(filterCategory);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.item}>
      <ImageBackground
        source={{ uri: img }}
        style={{
          ...styles.categorieImg,
        }}
      >
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "#181F27",
            opacity: 0.4,
          }}
        />
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
      <Recipes recipeChekedData={recipeChekedData} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    color: colors.WHITE,
    fontWeight: "800",
    fontSize: hp("3%"),
  },
  categorieImg: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    marginBottom: 15,
  },
});
export default RecipeDescription;
