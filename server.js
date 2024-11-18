const express = require('express');
const cors = require('cors'); // Import cors
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Enable JSON body parsing

// Database connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Replace with your MySQL password if you have one
    database: 'transactions_db' // Ensure this matches your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Define API routes
// Route to get all transactions
app.get('/api/transactions', (req, res) => {
    db.query('SELECT * FROM transactions', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Route to update transaction status
app.put('/api/transactions/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!['Approved', 'Declined'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status' });
    }

    db.query('UPDATE transactions SET status = ? WHERE id = ?', [status, id], (err, results) => {
        if (err) throw err;
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.json({ message: `Transaction ${status} successfully.` });
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
