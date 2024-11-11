import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Welecom from "../screens/Welecom";
import Home from "../screens/Home";
import Description from "../screens/Description";
import Profil from "../screens/Profil";
import Login from "../screens/Login";
import SeachRecipe from "../screens/SeachRecipe";
import ForgotPassword from "../screens/ForgotPassword";
import AllCategorie from "../screens/AllCategorie";
import { colors } from "../constant/Constant";
import RecipeDescription from "../screens/RecipeDescription";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welecom">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welecom"
        component={Welecom}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Description"
        component={Description}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfilUser"
        component={Profil}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SeachRecipe"
        component={SeachRecipe}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeDescription"
        component={RecipeDescription}
        options={{
          headerStyle: {
            backgroundColor: colors.ORANGE,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "600",
          },
          title: "Recipes Description",
        }}
      />
      <Stack.Screen
        name="AllCategorie"
        component={AllCategorie}
        options={{
          headerStyle: {
            backgroundColor: colors.ORANGE,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "600",
          },
          title: "All Categories",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
