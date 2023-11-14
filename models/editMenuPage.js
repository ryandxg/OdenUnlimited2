const Menu = require("./menu");

async function editMenuPage( req, res) {
    try {
       const menu = await Menu.findById(req.params.id);
       console.log(menu);
       res.render("editMenu", {menu})
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = editMenuPage