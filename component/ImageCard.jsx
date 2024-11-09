import { Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { Image } from "expo-image";

const ImageCard = ({ item, index }) => {
  const [imageHeights, setImageHeights] = useState({});

  useEffect(() => {
    // Calculer les hauteurs de toutes les images
    item?.strMealThumb.forEach((image, index) => {
      Image.getSize(image.uri, (width, height) => {
        const screenWidth = Dimensions.get("window").width;
        const calculatedHeight = (screenWidth / 2 / width) * height;
        setImageHeights((prev) => ({
          ...prev,
          [index]: calculatedHeight,
        }));
      });
    });
  }, []);
  return (
    <Pressable>
      <Image
        style={styles.image}
        source={item?.strMealThumb}
        transition={100}
      />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width / 2 - 10,
    height: imageHeights[index] || 200,
  },
});

export default ImageCard;
