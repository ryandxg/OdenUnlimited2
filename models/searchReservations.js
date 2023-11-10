const Reservation = require("./reservations");

async function searchReservations(req,res) {
    try {
        const providedEmail = req.query.email;
        const foundReservation = await Reservation.findOne({ reservationEmail: providedEmail}).exec();

        if (foundReservation) {
            res.status(200).json(foundReservation);
        } else {
            res.status(404).json({ error: "Reservation not found"});
        }
    } catch (error) {
        console.error("Error find reservation:", error);
        res.status(500).json({ error: "Internal Sever Error"});
    }
    
}

module.exports = searchReservations;