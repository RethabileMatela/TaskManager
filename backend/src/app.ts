// @ts-ignore
import express from 'express';
// @ts-ignore
import { errorHandler } from './middlewares/errorHandler';
// @ts-ignore
import userRoutes from './user/routes/userRoutes';
// @ts-ignore
import cors from 'cors';

import { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/users', userRoutes);



// Routes
// app.use('/api/users', userRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;