import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { categories, colors } from "../constant/Constant";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Categorie = ({ activeCat, setActiveCat, handleCheked }) => {
  const Item = ({ title, img }) => {
    let isActiv = title === activeCat;

    return (
      <TouchableOpacity
        onPress={() => {
          handleCheked(title);
          setActiveCat(title);
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
                backgroundColor: isActiv ? "#EA8404" : "#181F27",
                opacity: isActiv ? 0.7 : 0.4,
                borderRadius: 15,
              }}
            />
            <Text style={styles.title}>{title}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  const filterByCategory = (category) => {
    const filtered = packages.filter((pkg) => pkg.category === category);
    setFilteredPackages(filtered); // Met à jour avec les packages triés
  };
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Item title={item.strCategory} img={item.strCategoryThumb} />
        )}
        keyExtractor={(item) => item.idCategory}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 4,
    paddingVertical: 5,
  },
  title: {
    paddingVertical: hp("1%"),
    color: colors.WHITE,
    fontWeight: "600",
    fontSize: hp("1.5%"),
  },
  categorieImg: {
    width: 90,
    height: 40,
    borderRadius: 30,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Categorie;
