const path = require("path");
const Pricelist = require("./pricelist")

async function pricelistPage(req,res) {
    try {
        const pricelist = await Pricelist.find({});
        res.render("pricelist" , { pricelist: pricelist})
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = pricelistPage;