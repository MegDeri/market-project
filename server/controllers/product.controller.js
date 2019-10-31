const Product = require('../models/product.model');
const uuid = require('uuid');

// get all products
  exports.getProducts = async (req, res) => {
    
    try {
        res.status(200).json(await Product.find());
      } catch(err) {
        res.status(500).json(err);
      }
  
  };

  //get single product
  exports.getSingleProduct = async (req, res) => {
    
    try {
        res.status(200).json(await Product.find({id: req.params.id}));
      } catch(err) {
        res.status(500).json(err);
      }
  
  };

  //get products by range
  exports.getProductsByRange = async function (req, res) {

    try {
      let { startAt, limit } = req.params;
  
      startAt = parseInt(startAt);
      limit = parseInt(limit);
  
      const products = await Product.find().skip(startAt).limit(limit);
      const amount = await Product.countDocuments();
  
      res.status(200).json({
        products,
        amount,
      });
  
    } catch(err) {
      res.status(500).json(err);
    }
  
  };

  // add new product
exports.addProduct = async function (req, res) {

  try {
    const { name, price, picture } = req.body;

    let newProduct = new Product();
    newProduct.name = name;
    newProduct.price = price;
    newProduct.picture = picture;
    newProduct.id = uuid();

    productSaved = await newProduct.save();
    res.status(200).json(productSaved);

  } catch(err) {
    res.status(500).json(err);
  }

}