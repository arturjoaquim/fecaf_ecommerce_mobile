import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import { AuthService } from '@/services/AuthService';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await AuthService.login({ username, password });

      signIn(username);
      router.replace('/(categories)/masculino');

    } catch (error: any) {
      Alert.alert('Erro de Login', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
            style={styles.input}
            placeholder="Usuário"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            placeholderTextColor="black"
            editable={!isLoading}
        />
        <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="black"
            editable={!isLoading}
        />
        {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
        ) : (
            <Button title="Entrar" onPress={handleLogin} />
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    color: 'black',
    backgroundColor: '#fff',
  },
});
