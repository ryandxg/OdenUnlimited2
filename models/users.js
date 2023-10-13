// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String, // You should hash and salt the password for security
//   address: String,
//   phoneNumber: String,
// });

// module.exports = mongoose.model('User', userSchema);


const users = [
    { email: "peter@gmail.com", password: "Password1" },
    { email: "ryan@gmail.com", password: "Password1" }
];

module.exports = users;