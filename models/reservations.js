const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    reservationName: String,
    reservationNumberOfPeople: Number,
    reservationTime: String,
    reservationDate: String, 
    reservationPhoneNumber: Number,
    reservationEmail: String,
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;