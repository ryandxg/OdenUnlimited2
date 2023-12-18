const Pricelist = require("./pricelist");

async function editPricePage( req, res) {
    try {
       const price = await Pricelist.findById(req.params.id);
    //    console.log(reservation._id);
       res.render("editPricePage", {price})
    } catch (error) {
        // console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = editPricePage