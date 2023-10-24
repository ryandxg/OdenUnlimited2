

function reviewPost (req, res) {
    try {
        const { name, email, message} = req.body;
        console.log("name:", name);
        console.log("email:", email);
        console.log("message:", message);

        res.redirect("/")
    } catch (error) {
        console.log(error);
    }
}


module.exports = reviewPost