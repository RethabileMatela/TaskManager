import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import userRoutes from './user/routes/userRoutes';
import cors from 'cors';

const app = express();

app.use(express.json());

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))


// Routes
app.use('/api/users', userRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;