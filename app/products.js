import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import lista from "./products.json";
import IconFeather from 'react-native-vector-icons/Feather';
import React, { useRef } from 'react';

const getImage = (imageName) => {
  switch (imageName) {
    case 'menu_paoQueijo':
      return require('../assets/images/paos/menu_paoQueijo.jpg');
    case 'menu_baguete':
      return require('../assets/images/paos/menu_baguete.jpg');
    case 'menu_croissant':
      return require('../assets/images/paos/menu_croissant.jpg');
    case 'menu_paoSirio':
      return require('../assets/images/paos/menu_paoSirio.jpg');
    case 'menu_sorvete_chocolate':
      return require('../assets/images/sorvetes/menu_sorvete_chocolate.jpg');
    case 'menu_sorvete_chocolate_maracuja':
      return require('../assets/images/sorvetes/menu_sorvete_chocolate_maracuja.jpg');
    case 'menu_sorvete_morango':
      return require('../assets/images/sorvetes/menu_sorvete_morango.jpg');
    case 'menu_sorvete_baunilha':
      return require('../assets/images/sorvetes/menu_sorvete_baunilha.jpg');
  }
};

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

export default function Products() {
  const scrollViewRef = useRef(); // Referência para o ScrollView

  const categories = ['Pães', 'Sorvetes', 'Tortas', 'Salgados', 'Bebidas'];

  // Função para rolar até a seção correspondente
  const scrollToCategory = (index) => {
    const yOffset = 80 + (index * 800); // Ajuste esse valor conforme necessário
    scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
  };

  return (
    <ScrollView ref={scrollViewRef} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Escolha seu pedido</Text>
        <IconFeather name="user" style={styles.icon} />
      </View>

      {/* Categorias */}
      <Text style={styles.subtitle}>Categorias</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoria}>
          {categories.map((categoria, index) => (
            <TouchableOpacity
              key={categoria}
              style={styles.itemCategoria}
              onPress={() => scrollToCategory(index)}
            >
              <Text style={styles.categoriaText}>{categoria}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Produtos: Pães */}
      <Text style={styles.subtitle}>Pães</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {lista.listaProdutosPaos.map((item) => (
          <View key={item.id} style={styles.cardContainer}>
            <Link
              href={{ pathname: "paosingle/[id]", params: { id: item.id } }}
            >
              <View style={styles.card}>
                <Image source={getImage(item.image)} style={styles.image} />
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productDescription}>{truncateText(item.description, 100)}</Text>
                <Text style={styles.productPriceLabel}>Valor:</Text>
                <Text style={styles.productPrice}>R${item.price}</Text>
              </View>
            </Link>
          </View>
        ))}
      </ScrollView>

      {/* Produtos: Sorvetes */}
      <Text style={styles.subtitle}>Sorvetes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {lista.listaProdutosSorvetes.map((item) => (
          <View key={item.id} style={styles.cardContainer}>
            <Link
              href={{ pathname: "/sorvetesingle/[id]", params: { id: item.id } }}
            >
              <View style={styles.card}>
                <Image source={getImage(item.image)} style={styles.image} />
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productDescription}>{truncateText(item.description, 100)}</Text>
                <Text style={styles.productPriceLabel}>Valor:</Text>
                <Text style={styles.productPrice}>R${item.price}</Text>
              </View>
            </Link>
          </View>
        ))}
      </ScrollView>

      {/* Adicione as seções para Torts, Salgados e Bebidas aqui */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    fontStyle: "italic",
  },
  icon: {
    fontSize: 30,
    color: "#000",
  },
  subtitle: {
    fontSize: 25,
    fontStyle: "italic",
    marginTop: 30,
    marginLeft: 15,
  },
  categoria: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  itemCategoria: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: 65,
    height: 65,
    borderRadius: 32.5,
    marginRight: 10,
  },
  categoriaText: {
    color: "#fff",
    fontSize: 15,
  },
  cardContainer: {
    padding: 10,
    alignItems: "flex-end",
  },
  card: {
    width: 300,
    height: 400,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.8 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  image: {
    width: 280,
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  productDescription: {
    fontSize: 15,
    color: "white",
  },
  productPriceLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  productPrice: {
    fontSize: 20,
    color: "white",
  },
});
