export interface LoginCredentials {
  username: string;
  password?: string;
}

export const AuthService = {
  /**
   * Realiza o login do usuário com validações.
   * @param credentials Objeto contendo username e password.
   * @returns Promise que resolve se o login for bem-sucedido ou rejeita com uma mensagem de erro.
   */
  async login(credentials: LoginCredentials): Promise<void> {
    const { username, password } = credentials;

    // Simulação de delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Validação 1: Campos vazios
    if (!username || username.trim() === '') {
      throw new Error('O nome de usuário é obrigatório.');
    }

    if (!password || password.trim() === '') {
      throw new Error('A senha é obrigatória.');
    }

    // Validação 2: Tamanho mínimo da senha
    if (password.length < 6) {
      throw new Error('A senha deve ter pelo menos 6 caracteres.');
    }

    return;
  }
};
