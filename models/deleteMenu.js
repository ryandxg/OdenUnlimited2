const Menu = require("../models/menu.js");

async function deleteMenu (req,res) {
    try {
      const DeletedMenu = await Menu.findByIdAndDelete(req.params.id);
      console.log(DeletedMenu);
      res.redirect("/admin/menu")
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
}

module.exports = deleteMenu