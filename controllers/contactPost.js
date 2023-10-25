const Contact = require("../models/contacts");

async function contactPost (req,res) {
    try {
        const { fname, lname, email, phoneNumber, message } = req.body;
        // console.log("fname:", fname);
        // console.log("lname:", lname);
        // console.log("email:", email);
        // console.log("phoneNumber:", phoneNumber);
        // console.log("message:", message);

       // Create a new review using data from req.body
       const newContact = new Contact({
        fname,
        lname,
        email,
        phoneNumber,
        message,
        });

        // Save the review to the database
        const savedContact = await newContact.save();

        console.log('Contact saved:', savedContact);
        res.status(200).json({ message: 'submitted successfully' });
        // res.redirect("/contact")
    } catch (error) {
        console.log(error);
    }
}


module.exports = contactPost;