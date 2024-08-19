import { Router } from 'express';
import ProductController from '../controllers/product.controller.js';
import productSchema from '../schemas/product.schema.js';

const router = Router();
const productController = new ProductController();

router.post('/products', productSchema, productController.createProduct.bind(productController));
router.put('/products/:id', productSchema, productController.updateProduct.bind(productController));
router.get('/products', productController.getProducts.bind(productController));

export default router;
