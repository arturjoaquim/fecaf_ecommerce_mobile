const BASE_URL = 'https://dummyjson.com/products';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  images: string[];
}

export const ProductService = {
  /**
   * Busca produtos de uma categoria específica.
   * @param category O nome da categoria (ex: 'mens-shirts')
   * @returns Uma lista de produtos.
   */
  async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      const response = await fetch(`${BASE_URL}/category/${category}`);
      if (!response.ok) {
        throw new Error(`Erro ao buscar produtos da categoria ${category}`);
      }
      const data = await response.json();
      return data.products;
    } catch (error) {
      console.error('ProductService.getProductsByCategory error:', error);
      throw error;
    }
  },

  /**
   * Busca os detalhes de um produto pelo ID.
   * @param id O ID do produto.
   * @returns Os detalhes do produto.
   */
  async getProductById(id: string | number): Promise<Product> {
    try {
      const response = await fetch(`${BASE_URL}/${id}`);
      if (!response.ok) {
        throw new Error(`Erro ao buscar produto com ID ${id}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('ProductService.getProductById error:', error);
      throw error;
    }
  }
};
