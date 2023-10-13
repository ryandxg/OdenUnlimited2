const path = require("path");

function homePage(req,res){
    res.sendFile(path.join(__dirname, "../views/index.html"));
}

module.exports = homePage;