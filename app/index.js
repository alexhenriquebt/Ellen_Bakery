import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Ellen Bakery</Text>
      <Text style={styles.subtitle}>
        O melhor para seu café da manhã! Peça já
      </Text>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 400,
            height: 400,
            borderRadius: 200,
          }}
          source={require("../assets/images/inicial_img.jpg")}
        />
        <View
          style={{
            marginTop: 20,
          }}
        >
          <Link href="/products" asChild>
            <Pressable>
              <button style={styles.button}>Começar</button>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    margin: 20,
    fontSize: 50,
    fontStyle: "italic",
    fontFamily: "Georgia"
  },
  subtitle: {
    margin: 10,
    fontSize: 30,
    fontStyle: "italic",
    fontFamily: "Georgia",
    color: "gray"
  },
  button: {
    backgroundColor: "#fd8d32",
    color: "#fff",
    width: 200,
    height: 50,
    borderRadius: 50,
    borderWidth: 0
  },
});
