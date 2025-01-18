// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/constitulearn', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Database connection error:', err));

// Create a User schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Create User model
const User = mongoose.model('User', userSchema);

// Signup route
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Hash the password using bcryptjs
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save the new user to the database
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        if (err.code === 11000) { // Duplicate username or email
            return res.status(400).json({ error: 'Email or username already exists' });
        }
        res.status(500).json({ error: 'Something went wrong, please try again' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
