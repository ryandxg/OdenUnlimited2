const Admin = require ("../models/admin")
const bcrypt = require('bcryptjs');
const session = require('express-session');

async function adminLoginPost (req, res) {
    const { username, password } = req.body;
  
    const admin = await Admin.findOne({ username });
  
    if (!admin) {
      return res.send('Invalid username or password');
    }
  
    const passwordMatch = await bcrypt.compare(password, admin.password);
  
    if (passwordMatch) {
      req.session.isAdminLoggedIn = true; //session variable to indicate admin is logged in
      res.redirect("/admin")
    } else {
      res.send('Invalid username or password');
    }
  }

module.exports = adminLoginPost;