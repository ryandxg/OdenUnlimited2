const Pricelist = require ("../models/pricelist");

async function addPricelistPost (req, res){
    try{
        const name = req.body.name;
        const price = req.body.price;

        const newItem = new Pricelist({
            name: name,
            price: price,
        });
       
        const savedItem = await newItem.save();

        console.log('Price saved:', savedItem);
        res.redirect("/pricelist"); //addPricelist
    } catch(err) {
        console.error(err);
    }
}

module.exports = addPricelistPost; 