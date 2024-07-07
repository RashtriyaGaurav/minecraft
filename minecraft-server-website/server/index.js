const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API endpoint
app.post('/api/create-server', (req, res) => {
  const { serverName } = req.body;
  console.log(`Creating server: ${serverName}`);
  res.send({ message: `Server ${serverName} created successfully!` });
});

// Serve the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
