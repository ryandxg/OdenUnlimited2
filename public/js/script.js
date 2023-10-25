
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
    document.getElementById("mySidenav").style.width = "55%";
    $("#body").addClass("scroll");
});
  
closeMenu.addEventListener("click", () => {
    document.getElementById("mySidenav").style.width = "0";
    $("#body").removeClass("scroll");
});



// Function to show the notification
function showNotification() {
    const notification = document.getElementById("notification");
    notification.style.display = "block"; // Display the notification bar
    setTimeout(function() {
        notification.style.display = "none";

        // Reload the page after 5 seconds
        setTimeout(function() {
          window.location.reload();
        }, 5);
      }, 3000); console.log("Notification shown"); // 3000 milliseconds (3 seconds) in this example
}



// const sendBtn = document.getElementById("sendBtn");

// sendBtn.addEventListener("click", () => {
//     // Your review submission logic goes here
//     // Assuming you have successfully submitted the review, show the notification
//     showNotification();
// });
// const myForm = document.getElementById("myForm"); // Get your form by its ID

// myForm.addEventListener("submit", async function (event) {
//     event.preventDefault();
//  // Check if all required fields are valid
//  if (myForm.checkValidity()) {
//     // Construct the data to be sent to the server
//     const formData = new FormData(myForm); // This captures all form data

//     // Send the form data to the server using the fetch API
//     try {
//         const response = await fetch('/contact', {
//             method: 'POST',
//             body: formData,
//         });

//         if (response.ok) {
//             // Handle a successful response, e.g., show success notification
//             showNotification();
//         } else {
//             // Handle a non-successful response, e.g., show an error notification
//             console.log('Error:', response.status);
//         }
//     } catch (error) {
//         // Handle any network or server-related errors
//         console.error('Network error:', error);
//     }
// } else {
//     console.log("not working");
// }
// });

