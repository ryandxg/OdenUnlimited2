const path = require("path");

function loginPage(req,res) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
}

module.exports = loginPage;