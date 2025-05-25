import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import userRoutes from './user/routes/userRoutes';

const app = express();

app.use(express.json());

// Routes
app.use('/api/items', userRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;