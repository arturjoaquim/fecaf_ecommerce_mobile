# Commerce App - Programação Mobile

Este é um aplicativo de comércio eletrônico desenvolvido como parte da disciplina de Programação Mobile. O aplicativo permite visualizar produtos divididos por categorias (Masculino e Feminino), ver detalhes de cada produto e simular um fluxo de autenticação.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

-   **[React Native](https://reactnative.dev/)**: Framework principal para desenvolvimento mobile.
-   **[Expo](https://expo.dev/)**: Plataforma e conjunto de ferramentas para facilitar o desenvolvimento React Native.
-   **[Expo Router](https://docs.expo.dev/router/introduction/)**: Sistema de roteamento baseado em arquivos (File-system routing).
-   **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
-   **[Context API](https://react.dev/learn/passing-data-deeply-with-context)**: Para gerenciamento de estado global (Autenticação).
-   **Service Layer Pattern**: Arquitetura para segregar a lógica de negócios e chamadas de API.

## 📱 Funcionalidades

-   **Autenticação (Simulada):**
    -   Tela de Login com validação de campos (usuário e senha obrigatórios, senha mínima de 6 caracteres).
    -   Gerenciamento de sessão via Context API.
    -   Botão de Logout.
-   **Navegação:**
    -   Navegação por Abas (Tabs) para as seções principais (Masculino/Feminino).
    -   Navegação por Abas Superiores (Top Tabs) para subcategorias de produtos.
    -   Navegação em Pilha (Stack) para detalhes do produto.
-   **Listagem de Produtos:**
    -   Consumo da API pública [DummyJSON](https://dummyjson.com/).
    -   Filtragem de produtos por categoria.
    -   Barra de pesquisa para filtrar produtos na lista atual.
-   **Detalhes do Produto:**
    -   Visualização detalhada com imagem, descrição, preço e avaliação.

## 📸 Screenshots

| Login | Lista de Produtos | Detalhes do Produto |
|:---:|:---:|:---:|
| ![Login](https://imgur.com/yimjaDX) | ![Lista](https://imgur.com/P7fFFsq) | ![Detalhes](https://imgur.com/Z49wcGu) |

*(Substitua os links acima por prints reais do seu aplicativo)*

## 🛠️ Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

-   [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
-   [Git](https://git-scm.com/)

## 📦 Instalação e Execução

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd programacaomobile_commerceapp
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    npx expo install
    ```

3.  **Execute o projeto:**

    ```bash
    npx expo start -c
    ```
    *(A flag `-c` limpa o cache, garantindo que as últimas configurações sejam carregadas)*

4.  **Abra no seu dispositivo:**
    -   **Android:** Pressione `a` no terminal (requer emulador ou dispositivo conectado via USB).
    -   **iOS:** Pressione `i` no terminal (requer simulador macOS).
    -   **QR Code:** Escaneie o QR Code com o aplicativo **Expo Go** no seu celular (Android ou iOS).

## 📂 Estrutura do Projeto

O projeto segue uma estrutura organizada dentro da pasta `src`:

```
src/
├── app/                 # Rotas e Telas (Expo Router)
│   ├── (auth)/          # Grupo de rotas de autenticação (Login)
│   ├── (categories)/    # Grupo de rotas principais (Abas Masculino/Feminino)
│   ├── product/         # Rota dinâmica para detalhes do produto
│   ├── _layout.tsx      # Layout raiz e configuração de navegação
│   └── index.tsx        # "Porteiro" que redireciona baseado na autenticação
├── components/          # Componentes reutilizáveis (ex: ProductList)
├── context/             # Contextos do React (AuthContext)
└── services/            # Lógica de negócios e chamadas de API (AuthService, ProductService)
```

## 📝 Notas Adicionais

-   A autenticação é simulada e os dados não persistem após fechar o app completamente (a menos que implementado AsyncStorage futuramente).
-   A API utilizada é a `dummyjson.com`, que fornece dados fictícios para teste.

---

Desenvolvido para a disciplina de Programação Mobile.
