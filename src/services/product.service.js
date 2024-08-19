import axios from 'axios';
import mapper from '../config/mapper.js';
import { ProductDTO } from '../dto/product.dto.js';
import Product from '../models/product.model.js';
import ProductRepository from '../repositories/product.repository.js';

class ProductService {
  constructor() {
    this.productRepo = new ProductRepository();
  }

  async createProduct(data) {
    const productDTO = new ProductDTO(data.title, data.price, data.description, data.image, data.category);
    const productData = mapper.map(productDTO, ProductDTO, Product).get(); // Ensure it's a plain object
    const response = await axios.post('https://fakestoreapi.com/products', productData);
    if (response.status !== 200) throw new Error('Error from Fakestore API');
    return await this.productRepo.createProduct(productData);
  }
  


  async updateProduct(id, data) {
    const productDTO = new ProductDTO(data.title, data.price, data.description, data.image, data.category);
    const productData = mapper.map(productDTO, ProductDTO, Product);
    const response = await axios.put(`https://fakestoreapi.com/products/${id}`, productData);
    if (response.status !== 200) throw new Error('Error from Fakestore API');
    return await this.productRepo.updateProduct(id, productData);
  }

  async getProducts(query) {
    const { limit, category, sort } = query;
    
    // Default query options
    let queryOptions = {};

    // Apply category filter if provided
    if (category) {
      queryOptions.where = { category };
    }

    // Apply sorting if provided
    if (sort) {
      const [sortBy, sortOrder] = sort.split('_');
      queryOptions.order = [[sortBy, sortOrder.toUpperCase()]];
    }

    // Apply limit if provided
    if (limit) {
      queryOptions.limit = parseInt(limit, 10);
    }

    // Query the database
    const products = await Product.findAll(queryOptions);
    return products;
  }
}

export default ProductService;
