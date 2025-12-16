import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProductList from '@/components/ProductList';
import { SafeAreaView } from 'react-native-safe-area-context';

const TopTab = createMaterialTopTabNavigator();

const femaleCategories = [
  { name: 'womens-dresses', label: 'Vestidos' },
  { name: 'womens-shoes', label: 'Sapatos' },
  { name: 'womens-watches', label: 'Relógios' },
  { name: 'womens-bags', label: 'Bolsas' },
  { name: 'womens-jewellery', label: 'Joias' },
];

function FemaleProductsTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true, // Permite o scroll horizontal das abas
        tabBarItemStyle: { width: 'auto' }, // Garante que as abas tenham a largura do texto
      }}
    >
      {femaleCategories.map(category => (
        <TopTab.Screen key={category.name} name={category.label}>
          {() => <ProductList category={category.name} />}
        </TopTab.Screen>
      ))}
    </TopTab.Navigator>
  );
}

export default function FemininoScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <FemaleProductsTabs />
    </SafeAreaView>
  );
}
