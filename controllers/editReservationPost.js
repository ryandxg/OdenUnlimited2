const Reservation = require ("../models/reservations");

async function editReservationPost (req, res) {
    try {
        const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, { $set: req.body });
        console.log(updatedReservation);
        res.redirect("/admin/reservations");
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = editReservationPost