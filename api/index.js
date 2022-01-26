const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');
const cors = require("cors");
const multer = require("multer");
const req = require('express/lib/request');
const path = require('path');

dotenv.config();
const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URL, () => {
    console.log('Connection to MongoDB successfull')
});
app.use("/images", express.static(path.join(__dirname, "public/images")));


app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts' , postRoute);

app.listen(8000, () => {
    console.log('Backend server running');
})