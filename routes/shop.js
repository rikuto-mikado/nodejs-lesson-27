const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

// Display all products page
router.get('/products', shopController.getProducts);

// Display shopping cart page
router.get('/cart', shopController.getCart);

// Display checkout page
router.get('/checkout', shopController.getCheckout);

module.exports = router;
