const Review = require("../models/reviews");

async function reviewPost (req, res) {
    try {
        const { name, email, message } = req.body;

        // Create a new review using data from req.body
        const newReview = new Review({
        name,
        email,
        message,
        });

        // Save the review to the database
        const savedReview = await newReview.save();

        console.log('Review saved:', savedReview);
        res.status(200).json({ message: 'Review submitted successfully' });

        
        // const { name, email, message} = req.body;
        // console.log("name:", name);
        // console.log("email:", email);
        // console.log("message:", message);

        // res.redirect("/")
    } catch (error) {
        console.log(error);
    }
}


module.exports = reviewPost