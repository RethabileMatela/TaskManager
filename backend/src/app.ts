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

app.use(function (req, res, next) {
   res.setHeader(
     'Content-Security-Policy', "default-src 'none'; script-src 'none'; style-src 'none'; font-src 'none'; img-src 'none'; frame-src 'none'"
   );
   
   next();
 });

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;