const Product = require('../models/product.model');

// get all products

  exports.getProducts = async (req, res) => {
    
    try {
        res.status(200).json(await Product.find());
      } catch(err) {
        res.status(500).json(err);
      }
  
  };