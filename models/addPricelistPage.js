const path = require("path");
const Pricelist = require("./pricelist")

async function addPricelistPage(req,res){
    const pricelist = await Pricelist.find({});
    res.render("addPricelist", {pricelist: pricelist});
}

module.exports = addPricelistPage;