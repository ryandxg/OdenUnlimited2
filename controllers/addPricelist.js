const Pricelist = require ("../models/pricelist");

async function addPricelist (req, res){
    try{
        const name = req.body.title;
        const price = req.body.price;

        const newItem = new Pricelist({
            foodName: name,
            price: price,
        });
       
        const savedItem = await newItem.save();

        console.log('Price saved:', savedItem);
        res.redirect("/");
    } catch(err) {
        console.error(err);
    }
}

module.exports = addPricelist; 