import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constant/Constant";

const Button = ({
  handleNavigation,
  iconName,
  iconSize,
  iconColor,
  style,
  btnTitle,
}) => {
  return (
    <TouchableOpacity style={style} onPress={handleNavigation}>
      <Text style={styles.titleBtn}>{btnTitle}</Text>

      {iconName && (
        <MaterialIcons name={iconName} size={iconSize} color={iconColor} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  titleBtn: {
    color: colors.WHITE,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Button;
