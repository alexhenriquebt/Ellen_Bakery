import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Link } from "expo-router";
import lista from "./products.json";

export default function Products() {
    return(
        <ScrollView>
            <View>
                <Text style={styles.title}>Escolha seu pedido</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        marginTop: 20,
        marginLeft: 20,
        fontStyle: "italic",
        fontFamily: "Georgia",
    }
});