import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { categories, colors, recipe } from "../constant/Constant";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FlatGrid } from "react-native-super-grid";
import Animated, { FadeInDown } from "react-native-reanimated";

const AllCategorie = ({ navigation }) => {
  const [activCat, setActivCat] = useState();

  const Item = ({ title, img, index }) => {
    let isActiv = title === activCat;

    const handleGoToRecipe = () => {
      navigation.navigate("RecipeDescription", {
        img,
        title,
      });
      setActivCat(title);
    };

    return (
      <Animated.View
        entering={FadeInDown.delay(index * 100)
          .duration(900)
          .springify()
          .damping(12)}
      >
        <TouchableOpacity
          onPress={() => {
            handleGoToRecipe();
          }}
        >
          <View style={styles.item}>
            <ImageBackground
              source={{ uri: img }}
              style={{
                ...styles.categorieImg,
              }}
            >
              <View
                style={{
                  ...StyleSheet.absoluteFillObject,
                  backgroundColor: isActiv ? "#EA8402" : "#181F27",
                  opacity: isActiv ? 0.7 : 0.4,
                  borderRadius: 15,
                }}
              />
              <Text style={styles.title}>{title}</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const filterByCategory = (category) => {
    const filtered = packages.filter((pkg) => pkg.category === category);
    setFilteredPackages(filtered); // Met à jour avec les packages triés
  };
  return (
    <View>
      <FlatGrid
        itemDimension={300}
        data={categories}
        contentContainerStyle={{ paddingVertical: 5 }}
        renderItem={({ item, index }) => (
          <Item
            title={item.strCategory}
            index={index}
            img={item.strCategoryThumb}
          />
        )}
        spacing={5}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  title: {
    color: colors.WHITE,
    fontWeight: "800",
    fontSize: hp("3%"),
  },
  categorieImg: {
    width: "100%",
    height: 150,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default AllCategorie;
