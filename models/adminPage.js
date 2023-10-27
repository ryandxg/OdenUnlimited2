const path = require("path");
const Menu = require("./menu");

async function adminPage(req,res) {
    try {
        const menu = await Menu.find({});
        res.render("admin" , { menu: menu})
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = adminPage;