require ("dotenv").config();
import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

app.get('/',(req,res)=>{
    res.send("ProFile-AI Backend is Running!")
});

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, ()=> console.log(`Server is Running on port ${PORT}`));
