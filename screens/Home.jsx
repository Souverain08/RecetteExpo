import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Pressable,
} from "react-native";
import { colors, recipe } from "../constant/Constant";
import { Ionicons, Feather } from "@expo/vector-icons";
import Categorie from "../component/Categorie";
import Recipes from "../component/Recipes";
import images from "../assets/images/images";
import { Badge } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const [activeCat, setActiveCat] = useState("Beef");
  const [recipeChekedData, setRecipeChekedData] = useState([]);

  // ce pour filtrer les recipe qu'on a choisie

  // ce pour filtrer les recipe qu'on a choisie
  const handleCheked = (recipeCheked) => {
    const filterCategory = recipe?.filter(
      (val) => val?.strCategory == recipeCheked
    );
    setRecipeChekedData(filterCategory);
  };

  // ce pour nous permetre de choir la categorie numero avant de continuer

  useEffect(() => {
    const filterCategory = recipe.filter((val) => val.strCategory == activeCat);
    setRecipeChekedData(filterCategory);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.ORANGE} />

      <View style={styles.containerSheeld}>
        <ImageBackground
          resizeMode="cover"
          source={images.bgHome}
          style={styles.userContainer}
        >
          <View style={styles.user}>
            <TouchableOpacity
              style={styles.profilName}
              onPress={() => navigation.navigate("ProfilUser", userPrpfil)}
            >
              <Image source={images.profil} style={styles.userImg} />
              <View style={styles.NameUserContainer}>
                <Text style={styles.titleOne}>Hello, Souverain</Text>
                <Text style={styles.titleTwo}>Check Amazing Recipes ...</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBadge}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color={colors.ORANGE}
              />
              <Badge
                size={7}
                style={{
                  backgroundColor: "#EE6262",
                  position: "absolute",
                  top: 9,
                  right: 12,
                }}
              />
            </TouchableOpacity>
          </View>
          <Pressable
            onPress={() => navigation.navigate("SeachRecipe")}
            style={styles.containerInput}
          >
            <Feather name="search" size={24} color={colors.ORANGE} />
            <Text style={styles.titleSeachHome}>Seach Any Recipe..</Text>
          </Pressable>
        </ImageBackground>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleCategoAll}>
          <Text style={styles.titleCategorie}>Categories</Text>
          <TouchableOpacity onPress={() => navigation.push("AllCategorie")}>
            <Text style={styles.titleCategorieTwo}>All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categorie}>
          <Categorie
            activeCat={activeCat}
            setActiveCat={setActiveCat}
            handleCheked={handleCheked}
          />
        </View>
        <Text style={styles.titleRecipy}>Recipes</Text>

        <Recipes recipeChekedData={recipeChekedData} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BACK,
    flex: 1,
  },
  categorie: {
    width: "100%",
    paddingHorizontal: 10,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  userContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingHorizontal: 17,
  },
  user: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  iconBadge: {
    padding: 10,
    backgroundColor: colors.BACK,
    borderRadius: 100,
  },
  profilName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  titleOne: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.WHITE,
  },
  titleTwo: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.WHITE,
  },
  containerSheeld: {
    backgroundColor: colors.ORANGE,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  containerInput: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    backgroundColor: colors.BACK,
    padding: 15,
    width: "100%",
    borderRadius: 15,
    marginVertical: 20,
  },
  titleSeachHome: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.GREEN2,
  },
  titleCategorie: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.Noir,
  },
  titleCategorieTwo: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.ORANGE,
  },
  titleCategoAll: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  titleRecipy: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.Noir,
    paddingLeft: 15,
    paddingBottom: 15,
  },
});

export default Home;
