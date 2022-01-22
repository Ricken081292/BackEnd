const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

// create -> post
router.post('/product', productsController.createProduct);

// read -> get
router.get('/product', productsController.getAllProducts);

module.exports = router
