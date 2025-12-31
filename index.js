const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

// Import Routes
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Use Routes
app.use('/api/users', userRoutes);
// This creates links: localhost:5000/api/users/add AND localhost:5000/api/users/all

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});