import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import lista from "../products.json";

const screenWidth = Dimensions.get('window').width;

const getImage = (imageName) => {
  switch (imageName) {
    case 'menu_sorvete_chocolate':
      return require('../../assets/images/sorvetes/menu_sorvete_chocolate.jpg');
    case 'menu_sorvete_chocolate_maracuja':
      return require('../../assets/images/sorvetes/menu_sorvete_chocolate_maracuja.jpg');
    case 'menu_sorvete_morango':
      return require('../../assets/images/sorvetes/menu_sorvete_morango.jpg');
    case 'menu_sorvete_baunilha':
      return require('../../assets/images/sorvetes/menu_sorvete_baunilha.jpg');
  }
};

export default function paoSingle() {
  const { id } = useLocalSearchParams();
  const data = lista.listaProdutosSorvetes.find((item) => item.id == id);
  // console.log(data)

  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image style={[styles.image, { width: screenWidth }]} source={getImage(data.image)} />
        <Text style={styles.textProduct}> {data.title} </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 20,
            marginRight: 20
          }}
        >
          <Text style={styles.textProduct}>R$ {data.price} </Text>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "white", borderColor: "black", width: 100, padding: 10, }}>

            <Button
            title="-"
            color="black"
              />
            <Text>0</Text>
            <Button
              title="+"
              color="black"
            />
          </View>
        </View>
        <Text style={styles.titleDescription}>Descrição</Text>
        <Text style={styles.description}> {data.description} </Text>

        <View style={styles.fatherOrder}>
          <View>
          <Text style={styles.price}>Total: R${data.price}</Text>
          </View>
          <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Pedir</Text>
    </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    height: 200
  },
  textProduct: {
    marginTop: 30,
    marginBottom: 5,
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "justify",
    marginBottom: 10,
    backgroundColor: "#F2D8C2",
  },
  titleDescription: {
    marginTop: 50,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 25,
    fontWeight: "bold",
  },
  fatherOrder: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 80,
    marginBottom: 50,
    padding: 10,
    borderRadius: 8
  },
  button: {
    backgroundColor: '#fd8d32',
    height: 50,
    width: 100,
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    justifyContent: 'center', // Alinha o texto verticalmente
    alignItems: 'center',      // Alinha o texto horizontalmente
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
