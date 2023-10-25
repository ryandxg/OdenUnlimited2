const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});


const Review = mongoose.model('Review', reviewSchema);
// const reviews = [
//     { email: "peter@gmail.com", password: "Password1" },
//     { email: "ryan@gmail.com", password: "Password1" }
// ];

module.exports = Review;