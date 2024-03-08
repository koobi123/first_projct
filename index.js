const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
res.send('Welcome to my project!');
});

// Start server
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});