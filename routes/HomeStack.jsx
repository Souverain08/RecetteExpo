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

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
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
    </Stack.Navigator>
  );
};

export default HomeStack;
