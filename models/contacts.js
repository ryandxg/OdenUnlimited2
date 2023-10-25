const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phoneNumber: Number,
  message: String,
});


const Contact = mongoose.model('Contact', contactSchema);
// const reviews = [
//     { email: "peter@gmail.com", password: "Password1" },
//     { email: "ryan@gmail.com", password: "Password1" }
// ];

module.exports = Contact;