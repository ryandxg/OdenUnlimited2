const path = require("path");

function signupPage(req,res) {
    res.sendFile(path.join(__dirname, "../views/signup.html"));
}

module.exports = signupPage;