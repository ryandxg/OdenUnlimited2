const Menu = require ("../models/menu");

async function menuPost (req, res){
    try{
        const { 
            image,
            name,
            paragraph,
            price} = req.body

        const newMenu = new Menu({
            image: image,
            name: name,
            paragraph: paragraph,
            price: price,
        });
       
        const savedMenu = await newMenu.save();

        console.log('Menu saved:', savedMenu);
        res.redirect("/admin/menu"); //addPricelist
    } catch(err) {
        console.error(err);
    }
}

module.exports = menuPost;