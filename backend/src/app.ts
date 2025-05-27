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

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use('/api/users', userRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
   res.setHeader(
     'Content-Security-Policy',
     "default-src 'self'; font-src 'self' data: https://fonts.gstatic.com"
   );
   next();
});



// Routes
// app.use('/api/users', userRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);
app.use(express.static('./dist'));

export default app;