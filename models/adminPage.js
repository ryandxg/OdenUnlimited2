const path = require("path");

async function adminPage(req,res) {
    try {
        res.render("admin")
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = adminPage;