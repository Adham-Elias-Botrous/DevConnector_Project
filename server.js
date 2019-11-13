const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// init middleware
// app.use(express.json({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server is listening on http://localhost:${PORT}`));

app.get('/', (req, res) => res.send('API is Running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// I have to reorganize the code here, later.
