const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  id: { type: "String", required: true },
  name: { type: "String", required: true },
  brand: { type: "String", required: true },
  model: { type: "String", required: true },
  picture: { type: "Object", required: true },
  price: { type: "Number", required: true },
  quantity: { type: "Number", required: true },
  text: { type: "String", required: true }
});

module.exports = mongoose.model("Product", Product);
