import { Stack } from 'expo-router';
import { AuthProvider } from '@/context/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        
        <Stack.Screen name="(auth)/login" />
        
        <Stack.Screen name="(categories)" />
        
        <Stack.Screen
          name="product/[id]" 
          options={{ 
            presentation: 'modal',
            headerShown: true,
            title: 'Detalhes'
          }} 
        />
      </Stack>
    </AuthProvider>
  );
}
