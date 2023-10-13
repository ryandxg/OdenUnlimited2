const path = require("path");

function contactPage(req,res){
    res.sendFile(path.join(__dirname, "../views/contact.html"));
}

module.exports = contactPage;