import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { colors } from "../constant/Constant";

export default function CustomTextInput({
  label,
  value,
  placeholder,
  keyboardType,
  onChangeTextCustom,
  ...props
}) {
  return (
    <TextInput
      {...props}
      value={value}
      mode="outlined"
      label={label}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={(text) => onChangeTextCustom(text)}
      theme={{
        colors: {
          primary: colors.ORANGE, // Outline and label color when focused
          background: "rgba(14, 56, 84, 0.5)",
        },
      }}
      textColor={"#fff"}
    />
  );
}
