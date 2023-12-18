const Menu = require ("./menu");
const Review = require ("./reviews");

async function homePage(req,res){
    try {
        const menu = await Menu.find({});
        const review = await Review.find({});
        res.render("index" , { menu: menu, review: review})
    } catch (error) {
        // console.log(error);
    }
}

module.exports = homePage;