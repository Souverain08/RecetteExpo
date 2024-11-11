import { Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { Image } from "expo-image";
import Animated, { FadeInDown } from "react-native-reanimated";

const ImageCard = ({ item, index }) => {
  let isEven = index % 2 == 0;
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(600)
        .springify()
        .damping(12)}
    >
      <Pressable
        style={{
          ...styles.image,
          marginLeft: isEven ? 0 : 5,
          marginRight: !isEven ? 0 : 5,
          marginBottom: 10,
        }}
      >
        <Image
          style={{
            width: Dimensions.get("window").width / 2 - 10,
            height: index % 3 == 0 ? 200 : 300,
          }}
          source={item?.strMealThumb}
          transition={100}
        />
      </Pressable>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  image: {
    overflow: "hidden",
    borderRadius: 20,
  },
});

export default ImageCard;
