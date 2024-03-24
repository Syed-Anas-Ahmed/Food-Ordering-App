import { View, Text, Platform, FlatList } from "react-native";
import React, { useState } from "react";
import { useCart } from "@/providers/CartProvider";
import { CartItem, Product } from "@/types";
import CartListItem from "@/components/CartListItem";
import { spacing } from "@/constants/Colors";

const cart = () => {
  const [item, setItem] = useState<CartItem[]>([]);

  const { items, addItem } = useCart();

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: spacing.m, gap: spacing.m }}
      />
    </View>
  );
};

export default cart;
