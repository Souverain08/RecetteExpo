import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
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
          <Image
            source={{ uri: img }}
            style={{
              ...styles.categorieImg,
              backgroundColor: isActiv ? colors.ORANGE : colors.BACK,
            }}
            //style = {{...styles.categorieImg, ...activBtn}}
          />
          <Text style={styles.title}>{title}</Text>
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("4%"),
  },
  title: {
    paddingVertical: hp("1%"),
    color: colors.WHITE,
    fontWeight: "bold",
    fontSize: hp("1.5%"),
  },
  categorieImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: wp("5%"),
  },
});

export default Categorie;
