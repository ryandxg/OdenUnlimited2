// Client-side code to toggle buttons based on user status
let userLoggedIn = false;

const loginButton = document.getElementById('loginButton');
const signupButton = document.getElementById('signupButton');
const logoutButton = document.getElementById('logoutButton');

function updateUI() {
  if (userLoggedIn) {
    loginButton.style.display = 'none';
    signupButton.style.display = 'none';
    logoutButton.style.display = 'inline';
    userName.style.display = 'inline';
  } else {
    loginButton.style.display = 'inline';
    signupButton.style.display = 'inline';
    logoutButton.style.display = 'none';
  }
}

// Event listener for the Logout button
logoutButton.addEventListener('click', () => {
  // Perform logout operation here (clear cookies, sessions, or tokens)
  userLoggedIn = false;
  updateUI();
});

// Example of setting userLoggedIn to true when a user logs in
// userLoggedIn = true; // Set this when the user logs in


updateUI();




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
