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

app.use(function (req: Request, res: Response, next: NextFunction) {
   res.setHeader("content-security-policy-report-only", "default-src 'self'; script-src 'self' 'report-sample'; style-src 'self' 'report-sample'; base-uri 'none'; object-src 'none'; report-uri https://5e52f4c893efcda6a7d40460.endpoint.csper.io");
   next();
});
 
app.use('/api/users', userRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;