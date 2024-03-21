import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@assets/data/products";
import { bottleGreen, fontSizes, spacing, tintColorLight, white } from "@/constants/Colors";

const sizes = ["S", "M", "L", "XL"];

const product = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((product) => product.id.toString() === id);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `${product?.name}` }} />
      <Image source={{ uri: product?.image }} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.name}>{product?.name}</Text>
        <Text style={styles.sizeHeading}>Select Size</Text>
        <View style={styles.sizes}>
          {sizes.map((size) => (
            <View key={size} style={styles.size}>
              <Text style={styles.sizeText}>{size}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.price}>${product?.price}</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default product;

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.m, backgroundColor: "white" },
  image: { width: "100%", aspectRatio: 1 },
  details: { gap: spacing.m },
  name: {fontSize: fontSizes.xl, fontWeight: "bold"},
  sizeHeading: {fontSize: fontSizes.m},
  price: { fontSize: 20, fontWeight: "bold" },
  sizes: {
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  size: {
    backgroundColor: "lightgrey",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 5,
    borderRadius: 25,
  },
  sizeText: { fontSize: fontSizes.s, fontWeight: "bold"},
  addText: {color:white, fontSize: fontSizes.m},
  addBtn: {backgroundColor:bottleGreen,borderRadius: 10, padding: 10, alignItems: "center"}
});
