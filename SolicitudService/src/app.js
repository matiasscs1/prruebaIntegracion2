import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/routes.js'; 
import cookieParser from 'cookie-parser';

const app = express();


// Otros middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Rutas de autenticación
app.use(authRoutes);

export default app;
