const express=require('express');
const cors=require('cors');
require('dotenv').config();

const authRouter=require('./routes/auth');
const todoRouter=require('./routes/todos');

const app=express();

app.use(cors());
app.use(express.json());

app.use('/api/auth',authRouter);
app.use('/api/todos',todoRouter);

app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server started port ${process.env.PORT}`);
    
})