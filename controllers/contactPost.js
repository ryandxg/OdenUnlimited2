const Contact = require("../models/contacts");
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const userKey = process.env.USER_KEY;
const userPass = process.env.USER_PASS;
const userKey2 = process.env.USER_KEY2;
const userPass2 = process.env.USER_PASS2;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: userKey,
        pass: userPass,
    }
});
const transporterToAdmin = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: userKey2,
        pass: userPass2,
    }
});

async function contactPost (req,res) {
    try {
        const { fname, lname, email, phoneNumber, message } = req.body;

        const newContact = new Contact({
            fname,
            lname,
            email,
            phoneNumber,
            message,
        });

        // Save the review to the database
        const savedContact = await newContact.save();

        //TO ADMIN EMAIL
        const toAdminMailGenerator = new Mailgen({
            theme: 'default',
            product: {
            name: 'Oden Lounge',
            link: 'https://odenlounge.co.uk',
            logo: 'https://res.cloudinary.com/dmnaedwo6/image/upload/v1698424734/dyhdibug52dtvb4g405f.png',
            },
        });

        const contactToAdmin = [
            { contact: "First Name", details: fname },
            { contact: "Last Name", details: lname },
            { contact: "Email", details: email },
            { contact: "Phone Number", details: phoneNumber },
            { contact: "Message", details: message },
        ];

        // Generate an email template
        const emailToAdmin = {
            body: {
            name: "Admin",
            intro: 'Someone wants to contact you!',
            table: {
                data: contactToAdmin,
            },
            },
        };
        const toAdminEmailTemplate = toAdminMailGenerator.generate(emailToAdmin);

        const toAdminMailOptions = {
            from: 'Oden Lounge <odenreservations@gmail.com>',
            to: userKey,
            subject: 'New Contacts',
            html: toAdminEmailTemplate,   
        };

        try{
            // console.log('Contact saved:', savedContact);
            res.status(200).json({ message: 'submitted successfully' });
            const toAdminInfo = await transporterToAdmin.sendMail(toAdminMailOptions);
            // console.log('Email sent: ' + toAdminInfo.response);
        } catch {
            console.error(error);
        }
    } catch (error) {
        console.log(error);
    }
}


module.exports = contactPost;