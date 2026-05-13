const express = require('express');
const cors = require('cors');
const dns = require('dns');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.routes');

// Force Node to use a public DNS resolver for MongoDB Atlas SRV lookups.
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Terra API is running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});