const Reservation = require("./reservations");

async function reservationPage(req,res) {
    try {
        const reservations = await Reservation.find({});
        const providedEmail = await req.query.email;

        let foundReservationArray = [];

        // const foundReservation = await Reservation.find({ reservationEmail: providedEmail }).exec();
        // const foundReservationArray = Array.isArray(foundReservation) ? foundReservation : [foundReservation];
        // console.log("foundReservationArray:", foundReservationArray);

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

        // if (foundReservationArray.length === 0) {
        //     res.render("adminReservation", { reservations: reservations, foundReservations: foundReservationArray, error: "Reservation not found" });
        // } else {
        //     res.render("adminReservation", { reservations: reservations, foundReservations: foundReservationArray });
        // }

        // const providedEmail = await req.query.email;
        // const foundReservation = await Reservation.find({ reservationEmail: providedEmail}).exec();

        // res.render("adminReservation" , { reservations: reservations, providedEmail: foundReservation.length > 0 ? foundReservation[0] : null})

    } catch (error) {
        console.log(error);
    }
    
}

module.exports = reservationPage;

//  <% if (providedEmail) { %>
//     <div class="searchedContent">
//       <h1>Searched Email: <%= providedEmail %></h1>
//       <a href="admin/reservations">View all Reservations</a>
//     </div>

//   <% } else { %>
//         <ul>
//             <% reservations.forEach(function (reservations) {%>
//                 <li>
//                     <div class="reservationCard"  style="border: 1px solid #ccc;
//                     border-radius: 8px; padding: 16px; margin: 16px; 
//                     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); background-color: #fff;">
//                         <h1>Name: <%= reservations.reservationName %> </h1>
//                         <h2>Email: <%= reservations.reservationEmail %> </h2>
//                         <p>Phone Number: <%= reservations.reservationPhoneNumber %> </p>
//                         <p>Reserved Date: <%= reservations.reservationDate %> </p>
//                         <p>Reservation Time: <%= reservations.reservationTime %> </p>              
//                         <p>Number of People: <%= reservations.reservationNumberOfPeople %> </p>
//                     </div>
//                 </li>
//             <% }); %>   
//         </ul>
//     <% } %>