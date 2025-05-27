// @ts-ignore
import express from 'express';
// @ts-ignore
import { errorHandler } from './middlewares/errorHandler';
// @ts-ignore
import userRoutes from './user/routes/userRoutes';
// @ts-ignore
import cors from 'cors';
import { expressCspHeader, SELF, INLINE, NONE } from 'express-csp-header';

import { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json());

app.use(cors());

app.use(function(req, res, next) {
   res.setHeader("Content-Security-Policy", "object-src 'none'");
   return next();
});
app.use('/api/users', userRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;