import React from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

// const android = Platform.OS == 'android'
const CustomKeybordView = ({ children, style }) => {
  return (
    <KeyboardAvoidingView style={style}>
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CustomKeybordView;
