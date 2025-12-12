const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'GestureFlow is running! 🚀' });
});

app.post('/api/gesture', (req, res) => {
  const { gesture, confidence } = req.body;
  res.json({ 
    received: true, 
    gesture,
    confidence,
    timestamp: new Date()
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🎯 GestureFlow Server running on http://localhost:${PORT}`);
});

module.exports = app;
