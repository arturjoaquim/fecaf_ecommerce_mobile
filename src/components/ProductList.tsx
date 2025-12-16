import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ProductService, Product } from '@/services/ProductService';

export default function ProductList({ category }: { category: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await ProductService.getProductsByCategory(category);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const navigateToDetail = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 20 }} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar nesta categoria..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholderTextColor="black"
        />
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToDetail(item.id)}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>Preço: ${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>Nenhum produto encontrado.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8 },
  searchContainer: { flexDirection: 'row', padding: 8, alignItems: 'center' },
  input: { flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 8, borderRadius: 4, color: 'black'},
  item: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  title: { fontSize: 16, fontWeight: 'bold' },
});
