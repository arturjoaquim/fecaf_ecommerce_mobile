import { Redirect } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

export default function Index() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    // Se autenticado, redireciona para a primeira tela do app
    return <Redirect href="/(categories)/masculino" />;
  } else {
    // Se não autenticado, redireciona para a tela de login
    return <Redirect href="/(auth)/login" />;
  }
}
