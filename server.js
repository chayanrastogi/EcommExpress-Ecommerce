import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';

//env config
dotenv.config();

//rest object
const app = express();

//database config
connectDB()

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//rest api
app.get('/', (req, res) => {
    res.send('Ecommerce App');
})

//PORT 
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgCyan);
})