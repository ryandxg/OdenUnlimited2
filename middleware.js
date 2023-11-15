// Middleware to check if admin is logged in
const isAdminLoggedIn = (req, res, next) => {
    if (req.session.isAdminLoggedIn) {   
      next();
    } else {
      res.redirect('/admin-login');
    }
  };
  

module.exports = isAdminLoggedIn;