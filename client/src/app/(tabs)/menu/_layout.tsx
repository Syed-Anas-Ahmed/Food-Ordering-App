import Colors, { gold1, gold2, gold3, gold4, white } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable, Text } from "react-native";

export default function MenuScreen() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Menu",
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
    </Stack>
  );
}
