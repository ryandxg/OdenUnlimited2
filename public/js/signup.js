// let loginForm = document.querySelector(".my-form");

// loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const fname = document.getElementById("fname");
//     const lname = document.getElementById("lname");
//     const number = document.getElementById("number");
//     const email = document.getElementById("email");
//     const password = document.getElementById("password");
//     const address = document.getElementById("address");

//     console.log('Fname:', fname.value);
//     console.log('Lname:', lname.value);
//     console.log('Number:', number.value);
//     console.log('Email:', email.value);
//     console.log('Password:', password.value);
//     console.log('Address:', address.value);
//     // process and send to API 
// });

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