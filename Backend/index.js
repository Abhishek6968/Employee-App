const express=require('express');
const app=express();
app.use(express.json());

const cors=require('cors');
const morgan=require('morgan');
app.use(morgan('dev'));
require('dotenv').config();
app.use(cors());
const PORT=process.env.PORT
require('./db/connection')
const empRoutes=require('./Routes/crud');
app.use('/home',empRoutes);
const userRoutes=require('./Routes/user');
app.use('/user',userRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})