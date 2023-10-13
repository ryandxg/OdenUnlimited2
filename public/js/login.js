// let loginForm = document.querySelector(".my-form");

// loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let email = document.getElementById("email");
//     let password = document.getElementById("password");

//     console.log('Email:', email.value);
//     console.log('Password:', password.value);
    
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