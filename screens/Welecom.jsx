import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { colors } from "../constant/Constant";
import Button from "../component/Button";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";

const Welecom = ({ navigation }) => {
  const [isLod, setIsLod] = useState(false);

  const handleNavigation = () => {
    navigation.navigate("Home");
  };

  return (
    <ImageBackground
      source={require("../img/welecom.jpg")}
      resizeMode="cover"
      style={styles.container}
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "#0E3854",
          opacity: 0.8,
        }}
      />
      <Animated.Image
        entering={FadeInDown.delay(400).springify()}
        resizeMode="cover"
        source={require("../img/BingoImg.png")}
        style={styles.imgBingo}
      />
      <Animated.View
        entering={FadeInDown.delay(500).springify()}
        style={styles.containerSheeld}
      >
        <Text style={styles.titleWelcom}>the best recipe in the wold</Text>
        <Button
          style={styles.Button}
          handleNavigation={handleNavigation}
          iconSize={24}
          iconColor={colors.WHITE}
          btnTitle={"Started Explore"}
        />
      </Animated.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BACK,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: hp("3%"),
  },
  containerSheeld: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(5),
  },
  imgBingo: {
    width: 300,
    height: 165,
  },
  titleWelcom: {
    color: colors.WHITE,
    fontWeight: "600",
    fontSize: hp(1.4),
    // marginVertical: ,
  },
  Button: {
    width: wp("90%"),
    backgroundColor: colors.ORANGE,
    borderRadius: wp("3%"),
    paddingVertical: hp("1.4%"),
    alignItems: "center",
    marginVertical: hp("2"),
  },
});

export default Welecom;
