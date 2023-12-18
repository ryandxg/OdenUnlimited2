const Pricelist = require("../models/pricelist.js");

async function deletePrice (req,res) {
    try {
      const DeletedPrice = await Pricelist.findByIdAndDelete(req.params.id);
      // console.log(DeletedPrice);
      res.redirect("/admin/addPricelist")
    } catch (error) {
      // console.error(error);
      res.status(500).send('Internal Server Error');
    }
}

module.exports = deletePrice