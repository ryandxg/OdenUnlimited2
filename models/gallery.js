const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  image: String,
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;