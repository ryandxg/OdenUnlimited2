
function contactPost (req,res) {
    try {
        const { fname, lname, email, phoneNumber, message } = req.body;
        console.log("fname:", fname);
        console.log("lname:", lname);
        console.log("email:", email);
        console.log("phoneNumber:", phoneNumber);
        console.log("message:", message);

        res.status(200).json({ message: "Review Submitted" });
        // res.redirect("/contact")
    } catch (error) {
        console.log(error);
    }
}


module.exports = contactPost;