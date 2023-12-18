const Menu = require ("../models/menu");

async function editMenuPost (req, res) {
    try {
        const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, { $set: req.body });
        console.log(updatedMenu);
        res.redirect("/admin/menu");
    } catch (error) {
        // console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = editMenuPost