const Reservation = require("../models/reservations");

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
async function  reservationPost(req, res) {
    try {
        const {
          reservationName,
          reservationNumberOfPeople,
          reservationTime,
          reservationDate,
          reservationPhoneNumber,
          reservationEmail,
        } = req.body;
       
        const newReservation = new Reservation({
          reservationName,
          reservationNumberOfPeople,
          reservationTime,
          reservationDate,
          reservationPhoneNumber,
          reservationEmail,
         });
    
        // Save the reservation to the database
        const savedReservation = await newReservation.save();

        // console.log('Reservation saved:', savedReservation);

        //TO CUSTOMER EMAIL
        const mailGenerator = new Mailgen({
          theme: 'default',
          product: {
            name: 'Oden Unlimited',
            link: 'https://odenlounge.co.uk',
            logo: 'https://res.cloudinary.com/dmnaedwo6/image/upload/v1698424734/dyhdibug52dtvb4g405f.png',
          },
        });
        //TO ADMIN EMAIL
        const toAdminMailGenerator = new Mailgen({
          theme: 'default',
          product: {
            name: 'Oden Reservations',
            link: 'https://odenlounge.co.uk/admin',
            logo: 'https://res.cloudinary.com/dmnaedwo6/image/upload/v1698424734/dyhdibug52dtvb4g405f.png',
          },
        });

        const reservationDetails = [
          { reservation: "Reservation Date", details: reservationDate },
          { reservation: "Reservation Time", details: reservationTime },
          { reservation: "Number of People", details: reservationNumberOfPeople },
        ];

        // Generate an email template
        const email = {
          body: {
            name: req.body.reservationName,
            intro: 'Thank you for making a reservation!',
            table: {
              data: reservationDetails,
            },
            outro: 'We look forward to having you. If you have any questions, feel free to contact us.',
          },
        };
        const emailTemplate = mailGenerator.generate(email);

        const mailOptions = {
          from: 'ODEN Unlimited <odenloungecrewe@gmail.com>',
          to: req.body.reservationEmail,
          subject: 'Reservation Details',
          html: emailTemplate,   
        };
    
        const reservationDetailsToAdmin = [
          { reservation: "Name", details: reservationName },
          { reservation: "Reservation Date", details: reservationDate },
          { reservation: "Reservation Time", details: reservationTime },
          { reservation: "Number of People", details: reservationNumberOfPeople },
          { reservation: "Email", details: reservationEmail },
        ];

        // Generate an email template
        const emailToAdmin = {
          body: {
            name: "Admin",
            intro: 'A Reservation was made!',
            table: {
              data: reservationDetailsToAdmin,
            },
          },
        };
        const toAdminEmailTemplate = toAdminMailGenerator.generate(emailToAdmin);

        const toAdminMailOptions = {
          from: 'Oden Unlimited <odenreservations@gmail.com>',
          to: userKey,
          subject: 'New Reservation Details',
          html: toAdminEmailTemplate,   
        };
        
        try {
          res.status(200).json({ message: "Reservation Submitted" });
          const info = await transporter.sendMail(mailOptions);
          const toAdminInfo = await transporterToAdmin.sendMail(toAdminMailOptions);
          // console.log('Email sent: ' + info.response);
          // console.log('Email sent: ' + toAdminInfo.response);
          
        } catch (error) {
            // console.error(error);
        }
    } catch (error) {
        // console.log(error)
    }
}  

module.exports = reservationPost