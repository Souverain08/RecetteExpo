import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { colors } from "../constant/Constant";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Button from "../component/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { TextInput } from "react-native-paper";
import CustomKeybordView from "../component/keyBoder";
import CustomTextInput from "../component/CustomTextInput";

const Login = ({ navigation }) => {
  const [isSinIn, setIsSinIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailOne, setEmailOne] = useState("");
  const [password, setPassword] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [userImg, setUserImg] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordOne, setIsPasswordOne] = useState(false);
  const [isEmailOne, setIsEmailOne] = useState(false);
  const [message, setMessage] = useState("");
  const [messageEmailOne, setMessageEmailOne] = useState("");

  const handleNavigation = async () => {
    if (isSinIn) {
      if (emailOne.length <= 0) {
        setIsEmailOne(true);
        setMessageEmailOne("Please enter your email address.");
      } else if (passwordOne.length < 5) {
        setIsPasswordOne(true);
        setMessage("Make sure to total at least 6 characters.");
      } else {
        if (emailOne.length > 0) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(emailOne)) {
            setIsEmailOne(true);
            setMessageEmailOne("Please enter a valid email address.");
          }
        } else {
          setIsPasswordOne(false);
          setIsEmailOne(false);
          setMessage("");
          setMessageEmailOne("");
          //   navigation.navigate("Welecom");
        }
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setUserImg(result.assets[0].uri);
      setIsChecked(true);
    }
  };
  return (
    <CustomKeybordView style={styles.container}>
      <ImageBackground
        source={require("../img/bgWelecom.jpg")}
        resizeMode="cover"
        style={styles.containerTwo}
      >
        <View style={styles.overlay} />
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!isSinIn ? (
            <View style={styles.containerImg}>
              <Image
                source={
                  !isChecked ? require("../img/profil.png") : { uri: userImg }
                }
                style={styles.userImg}
              />
              <TouchableOpacity onPress={pickImage} style={styles.iconImg}>
                <MaterialIcons name="add-a-photo" style={styles.icon} />
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={styles.titleSin}>Login</Text>
          )}

          <View style={styles.containerInput}>
            {isSinIn ? (
              <View>
                {/* LOGIN */}
                <CustomTextInput
                  label="Email"
                  placeholder="Your email"
                  style={{ marginVertical: 10 }}
                  onChangeText={(text) => setEmailOne(text)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  outlineColor={isEmailOne ? colors.TOMATO : colors.GREEN2}
                />
                {messageEmailOne && (
                  <Text
                    style={{
                      ...styles.isSinInOne,
                      color: colors.TOMATO,
                      textAlign: "left",
                      paddingBottom: hp(0.5),
                      fontSize: hp(1.4),
                    }}
                  >
                    {messageEmailOne}
                  </Text>
                )}
                <CustomTextInput
                  label="Password"
                  placeholder="Your password"
                  secureTextEntry={!isVisibleOne}
                  onChangeText={(text) => setPasswordOne(text)}
                  right={
                    <TextInput.Icon
                      icon={isVisibleOne ? "eye-off" : "eye"}
                      color="#fff"
                      onPress={() => setIsVisibleOne(!isVisibleOne)}
                    />
                  }
                  outlineColor={isPasswordOne ? colors.TOMATO : colors.GREEN2}
                />
                {message && (
                  <Text
                    style={{
                      ...styles.isSinInOne,
                      color: colors.TOMATO,
                      textAlign: "left",
                      paddingTop: hp(1),
                      fontSize: hp(1.4),
                    }}
                  >
                    {message}
                  </Text>
                )}
              </View>
            ) : (
              <View>
                <CustomTextInput
                  label="Name"
                  placeholder="Your name"
                  onChangeText={(text) => setName(text)}
                />
                <CustomTextInput
                  label="Email"
                  placeholder="Your email"
                  style={{ marginVertical: 10 }}
                  onChangeText={(text) => setEmail(text)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <CustomTextInput
                  label="Password"
                  placeholder="Your password"
                  secureTextEntry={!isVisible}
                  onChangeText={(text) => setPassword(text)}
                  right={
                    <TextInput.Icon
                      icon={isVisible ? "eye-off" : "eye"}
                      color="#fff"
                      onPress={() => setIsVisible(!isVisible)}
                    />
                  }
                  outlineColor={!isPassword ? colors.TOMATO : colors.GREEN2}
                />
              </View>
            )}

            <Button
              style={styles.Button}
              handleNavigation={handleNavigation}
              iconSize={24}
              iconColor={colors.WHITE}
              btnTitle={isSinIn ? "Login" : "sign up"}
            />
            <Text style={styles.isSinInOne}>Or</Text>
            <View style={styles.iconContainer}>
              <View style={styles.iconCheeld}>
                <MaterialIcons name="facebook" size={38} color="white" />
              </View>
              <View style={styles.iconCheeld}>
                <AntDesign name="google" size={38} color="white" />
              </View>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.isSinIn}>
                {isSinIn
                  ? "Don't have a account ? "
                  : "Already have an account ?"}
              </Text>
              <TouchableOpacity
                onPress={() => setIsSinIn((changed) => !changed)}
              >
                <Text style={styles.isSinInOne}>
                  {isSinIn ? "Sign up" : "Login"}
                </Text>
              </TouchableOpacity>
            </View>
            {isSinIn && (
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text
                  style={{ ...styles.isSinInOne, paddingVertical: hp("3%") }}
                >
                  Forgot your password ?
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    </CustomKeybordView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACK,
  },
  containerTwo: {
    height: hp("103%"),
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Fills the entire ImageBackground
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Black with 50% opacity
  },

  userImg: {
    width: wp("20%"),
    height: hp("10%"),
    borderRadius: wp("15%"),
    marginTop: hp("1.5%"),
  },
  containerImg: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconImg: {
    alignSelf: "flex-end",
    paddingHorizontal: wp("2%"),
  },
  icon: {
    fontSize: wp("7%"),
    color: colors.ORANGE,
    position: "absolute",
    bottom: hp("0.1%"),
    left: wp("-5.6%"),
  },
  input: {
    backgroundColor: colors.GREEN,
    borderRadius: wp("4%"),
    paddingHorizontal: wp("5%"),
    paddingVertical: hp("1%"),
    fontSize: wp("3%"),
    marginVertical: hp("2%"),
  },
  containerInput: {
    width: wp("100%"),
    paddingHorizontal: wp("5%"),
    paddingVertical: hp("3%"),
  },
  Button: {
    backgroundColor: colors.ORANGE,
    borderRadius: wp("1.5%"),
    paddingHorizontal: wp("5%"),
    paddingVertical: hp("1.4%"),
    alignItems: "center",
    marginVertical: hp("2"),
  },
  isSinInOne: {
    textAlign: "center",
    color: colors.ORANGE,
    fontSize: wp("4%"),
  },
  isSinIn: {
    textAlign: "center",
    color: colors.GREEN,
    fontSize: wp("4%"),
  },
  titleSin: {
    fontSize: hp("3%"),
    textAlign: "center",
    color: colors.WHITE,
    fontWeight: "bold",
  },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  iconCheeld: {
    backgroundColor: "rgba(14, 56, 84, 0.6)",
    padding: 10,
    borderRadius: wp("1.5%"),
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingVertical: 10,
  },
});

export default Login;
