import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProductList from '@/components/ProductList';
import { SafeAreaView } from 'react-native-safe-area-context';

const TopTab = createMaterialTopTabNavigator();

const maleCategories = [
  { name: 'mens-shirts', label: 'Camisas' },
  { name: 'mens-shoes', label: 'Sapatos' },
  { name: 'mens-watches', label: 'Relógios' },
];

function MaleProductsTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true, // Permite o scroll horizontal das abas
        tabBarItemStyle: { width: 'auto' }, // Garante que as abas tenham a largura do texto
      }}
    >
      {maleCategories.map(category => (
        <TopTab.Screen key={category.name} name={category.label}>
          {() => <ProductList category={category.name} />}
        </TopTab.Screen>
      ))}
    </TopTab.Navigator>
  );
}

export default function MasculinoScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <MaleProductsTabs />
    </SafeAreaView>
  );
}
