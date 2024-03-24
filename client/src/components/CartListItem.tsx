import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors, { borderRadius, gold1, spacing, white } from "../constants/Colors";
import { CartItem } from "../types";
import { FontAwesome } from "@expo/vector-icons";
import { useCart } from "../providers/CartProvider";

type CartListItemProps = {
  cartItem: CartItem;
};

const CartListItem = ({ cartItem }: CartListItemProps) => {
  const { updateQuantity } = useCart();
  return (
    <View style={styles.container}>
      <View
        style={{
          borderTopLeftRadius: borderRadius.m,
          borderBottomLeftRadius: borderRadius.m,
          backgroundColor: gold1,
          alignItems: "center",
          justifyContent: "center",
          padding:5
        }}
      >
        <Image
          source={{ uri: cartItem.product.image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{cartItem.product.name}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.price}>${cartItem.product.price.toFixed(2)}</Text>
          <Text>Size: {cartItem.size}</Text>
        </View>
      </View>
      <View style={styles.quantitySelector}>
        <View
          style={{
            height: 20,
            width: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: gold1,
            borderRadius: borderRadius.m,
          }}
        >
          <FontAwesome
            onPress={() => updateQuantity(cartItem.id, -1)}
            name="minus"
            color="white"
          />
        </View>

        <Text style={styles.quantity}>{cartItem.quantity}</Text>
        <View
          style={{
            height: 20,
            width: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: gold1,
            borderRadius: 20,
          }}
        >
          <FontAwesome
            onPress={() => updateQuantity(cartItem.id, 1)}
            name="plus"
            color={white}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.m,
  },
  image: {
    width: 75,
    aspectRatio: 1,
    alignSelf: "center",
    },
  title: {
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 5,
  },
  subtitleContainer: {
    flexDirection: "row",
    gap: 5,
  },
  quantitySelector: {
    paddingHorizontal: spacing.m,
    flexDirection: "row",
    gap: spacing.m,
    alignItems: "center",
  },
  quantity: {
    fontWeight: "500",
    fontSize: 18,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});

export default CartListItem;
