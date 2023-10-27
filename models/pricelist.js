const mongoose = require("mongoose");

const pricelistSchema = new mongoose.Schema({
    name: String,
    price: Number,
    // Other fields and their types
  });
  
const Pricelist = mongoose.model("Pricelist", pricelistSchema);

module.exports = Pricelist