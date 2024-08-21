import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "Ellen Bakery"}}/>
      <Stack.Screen name="products" options={{title: "Lista de produtos"}}/>
    </Stack>
  );
}
