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
     'Content-Security-Policy-Report-Only', "default-src 'self'; script-src 'self' https://code.jquery.com/jquery-3.5.1.min.js https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.31/moment-timezone-with-data.js https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js; style-src 'self' https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css; font-src 'self' https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-brands-400.woff2 https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-brands-400.woff https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-brands-400.ttf https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-regular-400.woff2 https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-regular-400.woff https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-regular-400.ttf https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-solid-900.woff2 https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-solid-900.woff https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-solid-900.ttf; img-src 'self'; frame-src 'self'"
   );
   
   next();
 });

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;