const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes');

const PORT = process.env.PORT || 8001;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is working on ${PORT} port!`);
});
