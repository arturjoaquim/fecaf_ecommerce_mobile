import { Tabs, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useAuth } from '@/context/AuthContext';

export default function AppLayout() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    signOut();
    router.replace('/(auth)/login');
  };

  const LogoutButton = () => (
    <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
      <Ionicons name="log-out-outline" size={24} color="black" />
    </TouchableOpacity>
  );

  return (
    <Tabs screenOptions={{
      headerRight: () => <LogoutButton />,
    }}>
      <Tabs.Screen
        name="masculino"
        options={{
          title: 'Masculino',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="male" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="feminino"
        options={{
          title: 'Feminino',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="female" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
