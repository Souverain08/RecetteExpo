import { Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { Image } from "expo-image";

const ImageCard = ({ item, index, imageHeights }) => {
  return (
    <Pressable style={styles.image}>
      <Image
        style={{
          width: Dimensions.get("window").width / 2 - 10,
          height: 300,
        }}
        source={item?.strMealThumb}
        transition={100}
      />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  image: {
    overflow: "hidden",
    margin: 4,
    borderRadius: 15,
  },
});

export default ImageCard;
