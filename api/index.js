const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const userRoute = require('./routes/auth');
const authRoute = require('./routes/auth');

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URL, () => {
    console.log('Connection to MongoDB successfull')
});

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);



app.listen(8000, () => {
    console.log('Backend server running');
})