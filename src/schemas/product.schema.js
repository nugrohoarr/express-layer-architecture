import { Joi, celebrate } from 'celebrate';

const productSchema = celebrate({
  body: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().uri().required(),
    category: Joi.string().valid('electronics', 'jewelry', 'men\'s clothing', 'women\'s clothing').required(),
  }),
});

export default productSchema;
