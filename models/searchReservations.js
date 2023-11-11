const Reservation = require("./reservations");

async function searchReservations(req,res) {
    try {
        const providedEmail = req.query.email;
        const foundReservation = await Reservation.find({ reservationEmail: providedEmail}).exec();

        const reservations = await Reservation.find({});
        
        if (foundReservation) {
            res.render("adminReservation" , { providedEmail: foundReservation, reservations: reservations})
            // const foundReservationString = JSON.stringify(foundReservation, null, 1);
            // res.status(200).json(foundReservationString);
        } else {
            res.status(404).json({ error: "Reservation not found"});
        }
    } catch (error) {
        console.error("Error find reservation:", error);
        res.status(500).json({ error: "Internal Sever Error"});
    }
    
}

module.exports = searchReservations;