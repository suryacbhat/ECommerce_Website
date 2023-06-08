import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import cors from 'cors';

//cpnfigure now
dotenv.config();

const app = express();

//Database config
connectDB();

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/category",categoryRoutes)


app.get('/',(req,res) =>{
    res.send("<h1>Welcome to ecommerce</h1>");
});

const PORT=process.env.PORT || 8080 ;

app.listen(PORT, () =>{
    console.log(`Server running on ${process.env.DEV_MODE} mode on port${PORT}`.bgCyan.white);
})