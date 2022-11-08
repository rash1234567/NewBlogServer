const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogRoutes = require('./Routes/blogRoutes');
require('dotenv').config();

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(blogRoutes)


mongoose.connect(process.env.DB_URL).then(()=> {
    console.log('connected to mongodb')
}).catch(error => console.log('Could not connect', error));




app.listen(process.env.PORT, process.env.HOST_NAME, () => {
    console.log('listening')
})