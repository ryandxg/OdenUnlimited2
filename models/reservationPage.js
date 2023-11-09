const Reservation = require("./reservations");

async function reservationPage(req,res) {
    try {
        const reservations = await Reservation.find({});
        res.render("adminReservation" , { reservations: reservations})
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = reservationPage;