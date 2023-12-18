const Reservation = require("./reservations");

async function reservationPage(req,res) {
    try {
        const reservations = await Reservation.find({});
        const providedEmail = await req.query.email;

        let foundReservationArray = [];

        if (providedEmail) {
            foundReservationArray = await Reservation.find({ reservationEmail: providedEmail }).exec();
        }

        // foundReservationArray.forEach(reservation => {
        //     console.log("Reservation Name:", reservation.reservationName);
        // });

        let error = "";

        if (providedEmail && foundReservationArray.length === 0) {
            error = "Reservation not found";
        }


        res.render("adminReservation", { reservations: reservations, foundReservations: foundReservationArray, error: error });

    } catch (error) {
        // console.log(error);
    }
    
}

module.exports = reservationPage;
