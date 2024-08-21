import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Link } from "expo-router";
import lista from "./products.json";

export default function Products() {
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Escolha seu pedido</Text>
          <Text
            style={{
              fontSize: 30,
              fontStyle: "italic",
              fontFamily: "Georgia",
              marginTop: 30,
              marginLeft: 15
            }}
            >
            Categorias
          </Text>
        <View style={styles.categoria}>
            <button style={styles.itemCategoria}>Pães</button>
            <button style={styles.itemCategoria}>Sorvetes</button>
            <button style={styles.itemCategoria}>Tortas</button>
            <button style={styles.itemCategoria}>Salgados</button>
            <button style={styles.itemCategoria}>Bebidas</button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        marginTop: 20,
        marginLeft: 20,
    fontStyle: "italic",
    fontFamily: "Georgia",
},
  categoria: {
    flexDirection: "row",
    marginTop: 20,
    gap: 10,
    marginLeft: 10
  },
  itemCategoria: {
    backgroundColor: "#fd8d32",
    width: 100,
    height: 80,
    color: "#fff",
    borderColor: "#fd8d32",
    borderRadius: 80,
    borderWidth: 0
  }
});
