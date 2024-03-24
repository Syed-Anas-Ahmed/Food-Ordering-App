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
  black,
  borderRadius,
  fontSizes,
  gold1,
  gold2,
  spacing,
  white,
} from "@/constants/Colors";
import { Link } from "expo-router";

export const ProductListItem = ({ products }: { products: any[] }) => {
  return (
    <View style={{ paddingHorizontal: spacing.m }}>
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
                  marginTop: -30,
                  paddingTop: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: gold2,
                  borderTopLeftRadius: borderRadius.m,
                  borderTopRightRadius: borderRadius.m,
                  padding: spacing.m,
                  flex: 1,  
                }}
              >
                <Image
                  source={{
                    uri: item.image || "https://via.placeholder.com/150",
                  }}
                  style={{ width: 150, aspectRatio: 1, bottom: -20 }}
                />
              </View>
              <View
                style={{
                  marginTop: -40,
                  backgroundColor: white,
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
    backgroundColor: gold1,
    borderRadius: borderRadius.m,
    //padding: spacing.m,
    maxWidth: "100%",
    overflow: "hidden",
  },
  title: {
    color: 'black',
    fontSize: fontSizes.m,
    fontWeight: "700",
    opacity: 0.5,
  },
  price: {
    color: gold1,
    fontSize: 16,
    fontWeight: "400",
  },
});
