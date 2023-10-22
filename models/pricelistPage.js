const path = require("path");

function pricelistPage(req,res) {
    res.sendFile(path.join(__dirname, "../views/pricelist.html"));
}

module.exports = pricelistPage;