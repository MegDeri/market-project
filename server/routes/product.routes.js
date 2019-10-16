const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');

// get all posts
router.route('/products').get(ProductController.getProducts);

module.exports = router;