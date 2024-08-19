import Product from '../models/product.model.js';

class ProductRepository {
  async createProduct(data) {
    // Ensure the data passed to Sequelize is in the correct format
    return await Product.create({
      title: data.title,
      price: data.price,
      description: data.description,
      image: data.image,
      category: data.category,
    });
  }

  async updateProduct(id, data) {
    return await Product.update(
      {
        title: data.title,
        price: data.price,
        description: data.description,
        image: data.image,
        category: data.category,
      },
      { where: { id } }
    );
  }

  async findProductById(id) {
    return await Product.findByPk(id);
  }

  async findAllProducts(query) {
    return await Product.findAll(query);
  }
}

export default ProductRepository;
