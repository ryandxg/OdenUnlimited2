const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  image: String,
  name: String,
  paragraph: String,
  price: Number,
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;