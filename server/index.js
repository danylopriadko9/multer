const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes');
const path = require('path');

const PORT = process.env.PORT || 8001;

const app = express();

app.use(express.json({ extended: true }));
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is working on ${PORT} port!`);
});
