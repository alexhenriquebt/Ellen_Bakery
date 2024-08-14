import { View, Text, ScrollView } from "react-native";
import { Link } from "expo-router";
import lista from "./products.json";

export default function Products() {
    return(
        <ScrollView>
            <View>
                <Text>Escolha seu pedido</Text>
            </View>
        </ScrollView>
    );
}