const mongoose = require("mongoose");

const pricelistSchema = new mongoose.Schema({
    foodName: String,
    price: Number,
    // Other fields and their types
  });
  
const Pricelist = mongoose.model("Pricelist", pricelistSchema);

module.exports = Pricelist