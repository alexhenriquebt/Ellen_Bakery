import { Text, View, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ScrollView horizontal={false} vertical={true}>
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
          marginTop: 50
        }}
      >
        <Image
          style={{
            width: 250,
            height: 250,
            borderRadius: 150
          }}
          source={require("../assets/images/inicial_img.jpg")}
        />
        <View
          style={{
            marginTop: 20,
            marginBottom: 20
          }}
        >
          <Link href="/products" asChild>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.button}>Começar</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: "center"
  },
  title: {
    margin: 20,
    fontSize: 50,
    fontStyle: "italic",
  },
  subtitle: {
    margin: 10,
    fontSize: 30,
    fontStyle: "italic",
    color: "gray"
  },
  button: {
    color: "white"
  },
  
  buttonContainer: {
    backgroundColor: "black",
    width: 200,
    height: 50,
    borderRadius: 50,
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center"
  }
});
