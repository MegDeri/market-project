const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');

// get all products
router.route('/products').get(ProductController.getProducts);

//get single product
router.route('/products/:id').get(ProductController.getSingleProduct);

// get products by range
router.route('/products/range/:startAt/:limit').get(ProductController.getProductsByRange);

module.exports = router;