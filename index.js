// index.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the MERN Stack!');
});

// GET request
app.get('/api/data', (req, res) => {
  res.send('GET request successful!');
});

// POST request
app.post('/api/data', (req, res) => {
  res.send('POST request successful!');
});

// PUT request
app.put('/api/data/:id', (req, res) => {
  res.send(`PUT request successful for ID: ${req.params.id}`);
});

// DELETE request
app.delete('/api/data/:id', (req, res) => {
  res.send(`DELETE request successful for ID: ${req.params.id}`);
});

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/mern_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check connection status
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const dataRoutes = require('./routes/dataRoutes');

app.use('/data', dataRoutes);

const express = require('express');
const errorHandler = require('./path/to/error-handler');


// Your other middleware and route setup here

// Use the error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
