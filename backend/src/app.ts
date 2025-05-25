import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import userRoutes from './routes/userRoutes';
import { helloWorld } from './controllers/userController';

const app = express();

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

export default app;