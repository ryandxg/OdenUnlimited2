const Admin = require ("../models/admin")
const bcrypt = require('bcryptjs');

async function adminRegisterPost(req, res) {
    const { newUsername, newPassword } = req.body;
    console.log(newPassword);
    console.log(newUsername);
    
    const hashedPassword = await bcrypt.hash(newPassword, 10);
  
    const newAdmin = new Admin({
      username: newUsername,
      password: hashedPassword
    });
    console.log(newAdmin)
    await newAdmin.save();
    res.send('Admin registered successfully.');
}

module.exports = adminRegisterPost