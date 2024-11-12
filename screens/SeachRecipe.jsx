import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, recipe } from "../constant/Constant";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SeachRecipe = ({ navigation }) => {
  const [resultseach, setResultSeach] = useState([]);

  const seachRecipe = (recipeCat) => {
    if (recipeCat) {
      let filterSeach =
        recipe &&
        recipe.filter((valSeach) => {
          const valSeachData = valSeach.strMeal
            ? valSeach.strMeal.toUpperCase()
            : "".toUpperCase();
          const recipSeach = recipeCat.toUpperCase();
          return valSeachData.indexOf(recipSeach) > -1;
        });
      setResultSeach(filterSeach);
    }
  };

  let result = resultseach.map((valResult) => {
    return (
      <TouchableOpacity
        style={styles.itemSeach}
        key={valResult.idMeal}
        onPress={() => navigation.navigate("Description", valResult)}
      >
        <Image
          source={{ uri: valResult.strMealThumb }}
          style={styles.imgSearch}
        />
        <View style={{ alignItems: "flex-start", alignSelf: "flex-start" }}>
          <Text style={styles.titleSeach}>{valResult.strMeal}</Text>
          <Text style={styles.titleSeachTwo}>Ingredient</Text>
          <Text
            style={styles.titleSeachTree}
          >{`${valResult.strIngredient.strIngredient1}, ${valResult.strIngredient.strIngredient2}, ${valResult.strIngredient.strIngredient3} ...`}</Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.containerSeach}>
      <View style={styles.containerSeachSheeld}>
        <View style={styles.inputSearch}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons
              name="arrow-back-circle-sharp"
              size={40}
              color={colors.ORANGE}
            />
          </TouchableOpacity>
          <View>
            <TextInput
              placeholder="Search any recipe"
              style={styles.textInput}
              autoFocus={true}
              onChangeText={(text) => seachRecipe(text)}
            />
          </View>

          <TouchableOpacity>
            <Ionicons name="search-circle" size={40} color={colors.ORANGE} />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {result}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSeach: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15,
    paddingHorizontal: wp("3%"),
  },
  inputSearch: {
    width: "100%",
    backgroundColor: colors.GREEN,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("0.5%"),
    borderRadius: 15,
    marginBottom: 10,
  },
  textInput: {
    alignSelf: "center",
    width: wp("60%"),
    paddingVertical: hp("1%"),
  },
  titleSeach: {
    color: colors.Noir,
    fontWeight: "600",
    fontSize: wp("3%"),
    textAlign: "center",
  },
  titleSeachTree: {
    color: colors.Noir,
    fontWeight: "400",
    fontSize: wp("2%"),
    textAlign: "center",
  },
  titleSeachTwo: {
    color: colors.ORANGE,
    fontWeight: "400",
    fontSize: wp("3%"),
  },
  itemSeach: {
    backgroundColor: colors.BACK,
    width: "100%",
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("1.5%"),
    marginTop: hp("1%"),
    borderRadius: 15,
    elevation: wp("0.5%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    overflow: "hidden",
  },
  imgSearch: {
    height: 80,
    width: 80,
    borderRadius: 15,
  },
});

export default SeachRecipe;
