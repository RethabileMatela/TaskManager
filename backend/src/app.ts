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

app.use('/api/users', userRoutes);
app.use(expressCspHeader({
   directives: {
       'default-src': [SELF],
       'script-src': [SELF, INLINE, 'somehost.com'],
       'style-src': [SELF, 'mystyles.net'],
       'img-src': ['data:', 'images.com'],
       'worker-src': [NONE],
       'block-all-mixed-content': true
   }
}));

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;