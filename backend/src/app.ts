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
     'Content-Security-Policy-Report-Only', "default-src 'self'; script-src 'self' https://code.jquery.com https://cdnjs.cloudflare.com https://stackpath.bootstrapcdn.com https://cdn.jsdelivr.net 'sha256-ISInfOBSUWFgeTRFLf63g+rFNSswGDl15oK0iXgYM='; style-src 'self' https://stackpath.bootstrapcdn.com https://cdnjs.cloudflare.com; font-src 'self' https://cdnjs.cloudflare.com; img-src 'self'; frame-src 'self'"
   );
   next();
 });

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;