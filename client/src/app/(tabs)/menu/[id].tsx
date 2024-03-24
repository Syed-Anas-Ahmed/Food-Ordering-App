import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "@assets/data/products";
import { black, fontSizes, gold2, spacing, white } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { useCart } from "@/providers/CartProvider";
import { PizzaSize } from "@/types";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const product = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');
  const { addItem } = useCart();

  const product = products.find((product) => product.id.toString() === id);

  const addItemToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectedSize);
    router.push("/cart");
  };

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          title: `${product?.name}`,
          headerStyle: { backgroundColor: gold2 },
          headerTitleStyle: { color: white },
          navigationBarColor: white,
          headerRight: () => (
            <Link href={"/cart"} asChild>
              <Pressable style={{ marginRight: 20 }}>
                <FontAwesome name="shopping-cart" size={24} color={white} />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Image source={{ uri: product?.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product?.name}</Text>
        <Text style={styles.sizeHeading}>Select Size</Text>
        <View style={styles.sizes}>
          {sizes.map((size) => (
            <Pressable
              onPress={() => setSelectedSize(size)}
              key={size}
              style={[
                styles.size,
                { backgroundColor: selectedSize === size ? gold2 : "white" },
              ]}
            >
              <Text
                style={[
                  styles.sizeText,
                  { color: selectedSize === size ? white : black },
                ]}
              >
                {size}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.price}>${product?.price}</Text>
        <TouchableOpacity
          onPress={addItemToCart}
          activeOpacity={0.7}
          style={styles.addBtn}
        >
          <Text style={styles.addText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default product;

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.m },
  image: { width: "100%", aspectRatio: 1 },
  details: { gap: spacing.m },
  name: { fontSize: fontSizes.xl, fontWeight: "bold" },
  sizeHeading: { fontSize: fontSizes.m },
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
  sizeText: { fontSize: fontSizes.s, fontWeight: "bold" },
  addText: { color: white, fontSize: fontSizes.m },
  addBtn: {
    backgroundColor: gold2,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
});
