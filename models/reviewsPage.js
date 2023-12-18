const Review = require("./reviews");

async function reviewsPage(req,res) {
    try {
        const reviews = await Review.find({});
        res.render("adminReview" , { reviews: reviews})
    } catch (error) {
        // console.log(error);
    }
    
}

module.exports = reviewsPage;