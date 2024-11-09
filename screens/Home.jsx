import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { colors, recipe } from "../constant/Constant";
import { Ionicons, Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Categorie from "../component/Categorie";
import Recipes from "../component/Recipes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import images from "../assets/images/images";
import { Badge } from "react-native-paper";

const Home = ({ navigation }) => {
  const [activeCat, setActiveCat] = useState("Beef");
  const [recipeChekedData, setRecipeChekedData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userImg, setUserImg] = useState("");

  // recuperation de item
  const recup = async () => {
    let userIfo = await AsyncStorage.getItem("userProfil");

    if (userIfo.length > 0) {
      const user = JSON.parse(userIfo);
      setEmail(user.email);
      setName(user.name);
      setUserImg(user.userImg);
    }
  };
  useLayoutEffect(() => {
    recup();
  }, []);
  // ce pour filtrer les recipe qu'on a choisie

  const userPrpfil = {
    name: name,
    email: email,
    userImg: userImg,
  };
  // ce pour filtrer les recipe qu'on a choisie
  const handleCheked = (recipeCheked) => {
    const filterCategory = recipe.filter(
      (val) => val.strCategory == recipeCheked
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
                size={5}
                style={{
                  backgroundColor: "#EE6262",
                  position: "absolute",
                  top: 9,
                  right: 12,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerInput}>
            <Feather name="search" size={24} color={colors.ORANGE} />
            <Text style={styles.titleSeachHome}>Seach Any Recipe..</Text>
          </View>
        </ImageBackground>
      </View>

      {/* <View style={styles.categorie}>
        <Categorie
          activeCat={activeCat}
          setActiveCat={setActiveCat}
          handleCheked={handleCheked}
        />
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BACK,
    flex: 1,
  },
  categorie: {
    width: wp("100%"),
    paddingHorizontal: wp("4%"),
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
    color: colors.WHITE,
  },
});

export default Home;
