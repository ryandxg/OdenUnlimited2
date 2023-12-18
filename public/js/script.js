
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
      }, 3000); console.log("Notification shown");
}


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      autoplay: true,
      autoplayHoverPause: true,
      // nav:true,
      // navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
  })
});
