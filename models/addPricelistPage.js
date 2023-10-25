const path = require("path");

function addPricelistPage(req,res){
    res.sendFile(path.join(__dirname, "../views/addPricelist.html"));
}

module.exports = addPricelistPage;