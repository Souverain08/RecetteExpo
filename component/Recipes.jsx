import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from "./ImageCard";

const Recipes = ({ recipeChekedData }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={recipeChekedData}
        initialNumToRender={1000}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
        renderItem={({ item, index }) => (
          <ImageCard item={item} index={index} />
        )}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: wp(4),
  },
});

export default Recipes;
