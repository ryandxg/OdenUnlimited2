function  reservations(req, res) {
    try {
        const {
          reservationName,
          reservationNumberOfPeople,
          reservationTime,
          reservationDate,
          reservationPhoneNumber,
          reservationEmail,
        } = req.body;
       
        
            
        console.log("name:", reservationName);
        console.log("numberOfPeople:", reservationNumberOfPeople);
        console.log("time:", reservationTime);
        console.log("date:", reservationDate);
        console.log("phoneNumber:", reservationPhoneNumber);
        console.log("email:", reservationEmail);

        res.status(200).json({ message: "Reservation Submitted" });
        // res.redirect("/")
    } catch (error) {
        console.log(error)
    }
}  

module.exports = reservations