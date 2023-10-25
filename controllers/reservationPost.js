const Reservation = require("../models/reservations");

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
        res.status(200).json({ message: "Reservation Submitted" });
        // res.redirect("/")
    } catch (error) {
        console.log(error)
    }
}  

module.exports = reservationPost