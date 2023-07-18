const express = require('express');
const bodyParser = require('body-parser');

const mongodb = require('./mongo');
const mongoose = require('./mongoose');

const app = express();

app.use(bodyParser.json());


app.post('/products', mongoose.createProduct);

app.get('/products', mongoose.getProducts);

app.listen(5000);
