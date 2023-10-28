const path = require("path");
const Menu = require("./menu");

async function adminMenuPage(req,res) {
    try {
        const menu = await Menu.find({});
        res.render("adminMenu" , { menu: menu})
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = adminMenuPage;