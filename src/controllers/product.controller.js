import ProductService from '../services/product.service.js';
import { successResponse, errorResponse } from '../helpers/response.helper.js';

class ProductController {
  constructor() {
    this.productService = new ProductService();
  }

  async createProduct(req, res) {
    try {
      const result = await this.productService.createProduct(req.body);
      successResponse(res, result, 'Product created successfully', 201);
    } catch (err) {
      errorResponse(res, err, 'Failed to create product', 400);
    }
  }

  async updateProduct(req, res) {
    try {
      const result = await this.productService.updateProduct(parseInt(req.params.id), req.body);
      successResponse(res, result, 'Product updated successfully', 200);
    } catch (err) {
      errorResponse(res, err, 'Failed to update product', 400);
    }
  }

  async getProducts(req, res) {
    try {
      const result = await this.productService.getProducts(req.query);
      successResponse(res, result, 'Products retrieved successfully', 200);
    } catch (err) {
      errorResponse(res, err, 'Failed to retrieve products', 400);
    }
  }
}

export default ProductController;
