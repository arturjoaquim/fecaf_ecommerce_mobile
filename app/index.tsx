import {Text, View, StyleSheet, FlatList, TextInput} from "react-native";
import React from "react";

const products = [
    {id: '1', name: 'Produto 1'},
    {id: '2', name: 'Produto 2'},
    {id: '3', name: 'Produto 3'},
    {id: '4', name: 'Produto 4'},
    {id: '5', name: 'Produto 5'},
];

export default function Index() {
    const [text, setText] = React.useState("");
    const [filteredProducts, setFilteredProducts] = React.useState(products);

    const onChangeText = (value) => {
        setText(value);
        const results = products.filter(item => 
            item.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(results);
    };

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={onChangeText}
                style={styles.input}
                value={text}
                placeholder="Pesquise um produto..."
                placeholderTextColor="black"
                enterKeyHint="search"
                returnKeyType="search"
                inputMode="search"
            />
            <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.itemList}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    itemList: {
        gap: 8,
        paddingHorizontal: 16,
        paddingBottom: 20, // Adicionei um padding no final para a sombra do último item não cortar
    },
    item: {
        backgroundColor: '#ffffff',
        borderColor: '#c6c6c6',
        padding: 20,
        borderRadius: 6,
        
        // Sombra para iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        // Sombra para Android
        elevation: 5,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 6,
    },
});
