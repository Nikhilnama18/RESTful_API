const express = require('express');
const app = express();

// Importing the products route 
const productsRoute = require('./api/routes/products');

// Handling those products requests from this middlewear
app.use('/products', productsRoute);

//Handling every request 
app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works fine.'
    });
});

module.exports = app;