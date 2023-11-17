const Reservation = require("../models/reservations");

const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const userKey = process.env.USER_KEY;
const userPass = process.env.USER_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: userKey,
      pass: userPass,
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
    
        // Save the review to the database
        const savedReservation = await newReservation.save();

        console.log('Reservation saved:', savedReservation);

        const mailGenerator = new Mailgen({
          theme: 'default',
          product: {
            name: 'Oden Unlimited',
            link: 'https://mailgen.com/',
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
              // options: {
              //   columns: {
              //     // To hide the headers, set the display property to false for each column
              //     label: { display: false },
              //     value: { display: false },
              //   },
              // },
            },
            outro: 'We look forward to having you. If you have any questions, feel free to contact us.',
          },
        };
        const emailTemplate = mailGenerator.generate(email);

        const mailOptions = {
          from: 'Peter <onojapeter90@gmail.com>',
          to: req.body.reservationEmail,
          subject: 'Reservation Details',
          html: emailTemplate,   
        };
    
        
        try {
          res.status(200).json({ message: "Reservation Submitted" });
          const info = await transporter.sendMail(mailOptions);
          console.log('Email sent: ' + info.response);
          
        } catch (error) {
            console.error(error);
        }
    } catch (error) {
        console.log(error)
    }
}  

module.exports = reservationPost