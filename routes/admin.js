const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// Display add product form
router.get('/add-product', adminController.getAddProduct);

// Display admin products list
router.get('/products');

// Handle add product form submission
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
