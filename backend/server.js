require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: 'دهان داخلي', price: 25, image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'دهان خارجي', price: 30, image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'دهان الهيبة', price: 35, image: 'https://via.placeholder.com/300' },
];

app.get('/api/products', (req, res) => res.json(products));

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);