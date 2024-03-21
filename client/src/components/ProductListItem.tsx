import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Product } from "../types";
import {
  borderRadius,
  fontSizes,
  gold1,
  gold2,
  gold3,
  gold4,
  spacing,
  tintColorLight,
  white,
} from "@/constants/Colors";
import { Link } from "expo-router";

export const ProductListItem = ({ products }: { products: any[] }) => {
  return (
    <View style={{ paddingHorizontal: spacing.m, backgroundColor: gold2 }}>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ gap: spacing.m }}
        contentContainerStyle={{
          gap: spacing.m,
          borderRadius: spacing.m,
          paddingVertical: spacing.m,
        }}
        style={{
          borderRadius: spacing.m,
        }}
        data={products}
        renderItem={({ item }: { item: Product }) => (
          <Link href={`/menu/${item.id}`} asChild>
            <Pressable style={styles.container}>
              <View
                style={{
                  paddingTop:0,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  borderTopLeftRadius: borderRadius.m,
                  borderTopRightRadius: borderRadius.m,
                  padding: spacing.m,
                }}
              >
                <Image
                  source={{
                    uri: item.image || "https://via.placeholder.com/150",
                  }}
                  style={{ width: 150, aspectRatio: 1,bottom: -20}}
                />
              </View>
              <View
                style={{
                  marginTop: -40,
                  backgroundColor: gold1,
                  padding: spacing.m,
                  justifyContent: "flex-end",
                  borderBottomLeftRadius: borderRadius.m,
                  borderBottomRightRadius: borderRadius.m,
                }}
              >
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
            </Pressable>
          </Link>
        )}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: gold1,
    borderRadius: borderRadius.s,
    //padding: spacing.m,
    maxWidth: "100%",
  },
  title: {
    color: white,
    fontSize: fontSizes.m,
    fontWeight: "700",
  },
  price: {
    color: white,
    fontSize: 16,
    fontWeight: "400",
  },
});
