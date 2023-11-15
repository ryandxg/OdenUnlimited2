const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: String,
    password: String // Password will be hashed before saving
});
  
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;