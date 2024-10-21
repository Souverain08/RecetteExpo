import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { colors } from "../constant/Constant";
import { TextInput } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Button from "../component/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import CustomKeybordView from "../component/keyBoder";

const ForgotPassword = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;
  return (
    <CustomKeybordView style={styles.container}>
      <ImageBackground
        source={require("../img/bgWelecom.jpg")}
        resizeMode="cover"
        style={{ ...styles.containerTwo, paddingTop: paddingTop }}
      >
        <View style={styles.overlay} />
        <TouchableOpacity
          style={{ paddingHorizontal: wp("2%") }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back-circle-sharp"
            size={40}
            color={colors.ORANGE}
          />
        </TouchableOpacity>
        <View style={styles.containerInput}>
          <View style={styles.containerTitle}>
            <Text style={styles.titleOne}>Find your account</Text>
            <Text style={styles.titleTwo}>Enter your mobile number.</Text>
          </View>
          <TextInput
            mode="outlined"
            label="Number"
            placeholder="Your number"
            right={<TextInput.Affix />}
            theme={{
              colors: {
                primary: colors.GREEN, // Outline and label color when focused
                background: "rgba(14, 56, 84, 0.5)",
                text: "#fff",
              },
            }}
          />
          <Text style={{ ...styles.titleTwo, paddingTop: hp("2%") }}>
            You may receive text notifications from us for security and login
            purposes.
          </Text>
          <Button
            style={styles.Button}
            handleNavigation={() => console.log("Bonjour")}
            iconSize={24}
            iconColor={colors.WHITE}
            btnTitle={"continue"}
          />
        </View>
      </ImageBackground>
    </CustomKeybordView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTwo: {
    height: hp("103%"),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  containerInput: {
    width: wp("100%"),
    paddingHorizontal: wp("5%"),
    paddingVertical: hp("0%"),
  },
  Button: {
    backgroundColor: colors.ORANGE,
    borderRadius: wp("1.5%"),
    paddingHorizontal: wp("5%"),
    paddingVertical: hp("1.4%"),
    alignItems: "center",
    marginVertical: hp("2"),
  },
  containerTitle: {
    paddingVertical: hp("2%"),
  },
  titleOne: {
    fontSize: hp("3%"),
    color: colors.WHITE,
    fontWeight: "bold",
  },
  titleTwo: {
    fontSize: hp("1.5%"),
    color: colors.WHITE,
    fontWeight: "400",
  },
});

export default ForgotPassword;
