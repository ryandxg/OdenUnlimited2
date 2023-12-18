async function adminLogin (req, res) {
    try {
      res.render("adminLogin");
    } catch (error) {
      // console.error(error);
    }
}

module.exports = adminLogin;