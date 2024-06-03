
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./router/userRouter');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Middleware
// app.use(bodyParser.json());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors({
  origin: '*',
}));

// Routes
app.use('/api/user', userRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(process.env.MONGODB_URI,'MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
