const Reservation = require("../models/reservations.js");

async function deleteReservation (req,res) {  
    try {
      const DeletedReservation = await Reservation.findByIdAndDelete(req.params.id);
      console.log(DeletedReservation);
      res.redirect("/admin/reservations")
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  module.exports = deleteReservation