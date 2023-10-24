
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
    setTimeout(() => {
        notification.style.display = "none"; // Hide the notification bar after a few seconds (adjust the time as needed)
    }, 30000); // 3000 milliseconds (3 seconds) in this example
}

const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
    // Your review submission logic goes here
    // Assuming you have successfully submitted the review, show the notification
    showNotification();
});

