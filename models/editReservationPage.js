const Reservation = require("./reservations");

async function editReservationPage( req, res) {
    try {
       const reservation = await Reservation.findById(req.params.id);
    //    console.log(reservation._id);
       res.render("editReservation", {reservation})
    } catch (error) {
        // console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = editReservationPage