const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phoneNumber: Number,
  message: String,
});


const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;