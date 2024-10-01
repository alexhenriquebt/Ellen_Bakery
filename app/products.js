import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import lista from "./products.json";
import IconFeather from 'react-native-vector-icons/Feather';

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};

export default function Products() {
  return (
    <ScrollView style={{backgroundColor: "white"}}>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Escolha seu pedido</Text>
          <IconFeather name="user" style={styles.title}></IconFeather>

          <View>
            {/* User icon and notifications icon */}
          </View>
        </View>

        <Text style={styles.subtitle}>Categorias</Text>
        <ScrollView horizontal={true} vertical={false}>
          <View style={styles.categoria}>
          <TouchableOpacity style={styles.itemCategoria} href="#1">Pães</TouchableOpacity>
            <TouchableOpacity style={styles.itemCategoria} href="#2">Sorvetes</TouchableOpacity>
            <TouchableOpacity style={styles.itemCategoria}>Tortas</TouchableOpacity>
            <TouchableOpacity style={styles.itemCategoria}>Salgados</TouchableOpacity>
            <TouchableOpacity style={styles.itemCategoria}>Bebidas</TouchableOpacity>
          </View>
        </ScrollView>

        <Text style={styles.subtitle} id="1">Pães</Text>
        <ScrollView horizontal={true} vertical={false}>
          {lista.listaProdutosPaos.map((item) => (
            <View key={item.id} style={styles.cardContainer}>
              <Link
                href={{
                  pathname: "paosingle/[id]",
                  params: { id: item.id },
                }}
              >
                <View style={styles.card}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <Text style={{fontSize: 20, fontWeight: "bold"}}>{item.title}</Text>
                  <Text style={{fontSize: 15}}>{truncateText(item.description, 100)}</Text>
                  <Text style={{fontSize: 20, fontWeight: "bold"}}>Valor:</Text>
                  <Text style={{fontSize: 20}}>R${item.price}</Text>
                </View>
              </Link>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.subtitle} id="2">Sorvetes</Text>
        <ScrollView horizontal={true} vertical={false}>
          {lista.listaProdutosSorvetes.map((item) => (
            <View key={item.id} style={styles.cardContainer}>
              <Link
                href={{
                  pathname: "/sorvetesingle/[id]",
                  params: { id: item.id },
                }}
              >
                <View style={styles.card}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <Text style={{fontSize: 20, fontWeight: "bold"}}>{item.title}</Text>
                  <Text style={{fontSize: 15}}>{truncateText(item.description, 100)}</Text>
                  <Text style={{fontSize: 20, fontWeight: "bold"}}>Valor:</Text>
                  <Text style={{fontSize: 20}}>R${item.price}</Text>
                </View>
              </Link>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 40
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    marginLeft: 20,
    fontStyle: "italic",
    fontFamily: "Georgia",
  },
  subtitle: {
    fontSize: 25,
    fontStyle: "italic",
    fontFamily: "Georgia",
    marginTop: 30,
    marginLeft: 15,
  },
  categoria: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    gap: 10,
    marginLeft: 10,
  },
  itemCategoria: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fd8d32",
    width: 65,
    height: 65,
    color: "#fff",
    borderColor: "#fd8d32",
    borderRadius: 60,
    borderWidth: 0,
    fontSize: 15,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
  },
  card: {
    marginTop: 20,
    width: 300,
    height: 500,
    backgroundColor: "#fd8d32",
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.8 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    fontSize: 15,
    padding: 10,
    color: "white"
  },
  image: {
    flex: 1,
    height: 80,
    marginBottom: 10,
    marginTop: 0,
    borderRadius: 8,
  }
});
