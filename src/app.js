import express from 'express';
import productRoutes from './routes/product.routes.js';
import { errors } from 'celebrate';
import dotenv from 'dotenv';
import sequelize from './config/database.js';


sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => console.error('Error syncing database:', err));

dotenv.config();

const app = express();
app.use(express.json());

app.use('/v1', productRoutes);

app.use(errors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
