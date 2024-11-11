import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Octicons, Ionicons, AntDesign } from "@expo/vector-icons";
import { colors } from "../constant/Constant";

const Description = ({ route, navigation }) => {
  const data = route.params;

  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.containerDetail}>
      <ImageBackground
        source={{ uri: data.strMealThumb }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-circle-sharp"
              size={40}
              color={colors.ORANGE}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsActive((like) => !like)}>
            <AntDesign
              name="heart"
              size={40}
              color={!isActive ? colors.ORANGE : colors.TOMATO}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={false}
        style={{
          backgroundColor: "#fff",
          top: -123,
          borderTopLeftRadius: 90,
        }}
      >
        <View>
          <Text style={styles.measureTitle}>Mesure</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={styles.contentContainer}
          >
            <View style={styles.containerMeasure}>
              <View style={styles.sheeldMeasure}>
                <Text style={styles.titleMeasure}>
                  {data.strMeasure.strMeasure1}
                </Text>
              </View>
              <View style={styles.sheeldMeasure}>
                <Text style={styles.titleMeasure}>
                  {data.strMeasure.strMeasure2}
                </Text>
              </View>
              <View style={styles.sheeldMeasure}>
                <Text style={styles.titleMeasure}>
                  {data.strMeasure.strMeasure3}
                </Text>
              </View>
              <View style={styles.sheeldMeasure}>
                <Text style={styles.titleMeasure}>
                  {data.strMeasure.strMeasure4}
                </Text>
              </View>
              <View style={styles.sheeldMeasure}>
                <Text style={styles.titleMeasure}>
                  {data.strMeasure.strMeasure5}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View>
          <Text style={styles.titleIncredient}>Incredient</Text>
          <View style={styles.containerIngredient}>
            <Octicons name="dot-fill" size={24} color={colors.ORANGE} />
            <Text style={styles.titleCheeldIngredient}>
              {data.strIngredient.strIngredient1}
            </Text>
          </View>
          <View style={styles.containerIngredient}>
            <Octicons name="dot-fill" size={24} color={colors.ORANGE} />
            <Text style={styles.titleCheeldIngredient}>
              {data.strIngredient.strIngredient2}
            </Text>
          </View>
          <View style={styles.containerIngredient}>
            <Octicons name="dot-fill" size={24} color={colors.ORANGE} />
            <Text style={styles.titleCheeldIngredient}>
              {data.strIngredient.strIngredient3}
            </Text>
          </View>
          <View style={styles.containerIngredient}>
            <Octicons name="dot-fill" size={24} color={colors.ORANGE} />
            <Text style={styles.titleCheeldIngredient}>
              {data.strIngredient.strIngredient4}
            </Text>
          </View>
          <View style={styles.containerIngredient}>
            <Octicons name="dot-fill" size={24} color={colors.ORANGE} />
            <Text style={styles.titleCheeldIngredient}>
              {data.strIngredient.strIngredient5}
            </Text>
          </View>
          <View style={styles.containerIngredient}>
            <Octicons name="dot-fill" size={24} color={colors.ORANGE} />
            <Text style={styles.titleCheeldIngredient}>
              {data.strIngredient.strIngredient6}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.titleInstruction}>Instructions</Text>
          <Text style={styles.titleCheeldInstruction}>
            {data.strInstructions}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: wp("5%"),
    paddingHorizontal: wp("5%"),
  },
  containerDetail: {
    backgroundColor: colors.BACK,
  },
  image: {
    width: wp("100%"),
    height: hp("40%"),
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("1%"),
  },
  measureTitle: {
    fontSize: hp("3%"),
    textAlign: "center",
    color: colors.Noir,
    marginTop: hp("2%"),
  },
  containerMeasure: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: hp("4%"),
  },
  sheeldMeasure: {
    paddingHorizontal: wp("4%"),
    paddingVertical: wp("2%"),
    marginHorizontal: wp("4%"),
    borderRadius: wp("3%"),
    backgroundColor: colors.ORANGE,
  },
  titleMeasure: {
    fontSize: hp("1.5%"),
    color: colors.WHITE,
  },
  titleIncredient: {
    fontSize: hp("3%"),
    textAlign: "center",
    color: colors.Noir,
  },
  containerIngredient: {
    display: "flex",
    flexDirection: "row",
    padding: wp("1.5%"),
    marginVertical: hp("0.5%"),
    marginHorizontal: wp("4%"),
  },
  titleCheeldIngredient: {
    fontSize: hp("2%"),
    textAlign: "center",
    color: colors.Noir,
    marginHorizontal: wp("4%"),
  },
  titleInstruction: {
    fontSize: hp("3%"),
    textAlign: "center",
    color: colors.Noir,
    marginTop: hp("3%"),
  },
  titleCheeldInstruction: {
    fontSize: hp("2%"),
    textAlign: "center",
    color: colors.Noir,
    marginVertical: hp("3%"),
    paddingHorizontal: wp("3%"),
  },
});

export default Description;
