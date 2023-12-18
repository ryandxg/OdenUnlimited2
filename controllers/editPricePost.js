const Pricelist = require ("../models/pricelist");

async function editPricePost (req, res) {
    try {
        const updatedPricelist = await Pricelist.findByIdAndUpdate(req.params.id, { $set: req.body });
        // console.log(updatedPricelist);
        res.redirect("/admin/addPricelist");
    } catch (error) {
        // console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = editPricePost