import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import countriesRoutes from './routes/countriesRoutes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/countries', countriesRoutes);

export default app;
