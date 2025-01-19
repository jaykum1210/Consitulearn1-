const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'constituLearn', // Replace with your MySQL database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Sign-up Route
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the user already exists
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
      [username, email, hashedPassword], (err, results) => {
        if (err) {
          return res.status(500).json({ message: 'Error creating user', error: err });
        }
        res.status(201).json({ message: 'User created successfully' });
      });
  });
});

// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const user = results[0];

    // Compare the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful' });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
