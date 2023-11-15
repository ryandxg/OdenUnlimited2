const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
require('dotenv').config();
const methodOverride = require('method-override');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const isAdminLoggedIn = require("./middleware.js");


const app = express();
const port = 3000;

app.use(methodOverride('_method'));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs'); // Set the view engine to EJS
app.use(express.static('public')); // Serve static files 

// Configure Cloudinary (as shown in previous responses)
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
// console.log(cloudinary.config());
// Define the local path to your image folder
const localImagePath = "./public/images";

// // Read the files in the local folder
// fs.readdir(localImagePath, (err, files) => {
//     if (err) {
//         console.error('Error reading the local folder:', err);
//         return;
//     }

//     // Iterate through the files and upload them to Cloudinary
//     files.forEach(file => {
//         const imagePath = path.join(localImagePath, file);

//         cloudinary.uploader.upload(imagePath, (error, result) => {
//             if (error) {
//                 console.error(`Error uploading ${file}:`, error);
//             } else {
//                 console.log(`Uploaded ${file}: ${result.url}`);
//                 // Here, you can store the `result.url` in your database or perform other actions.
//             }
//         });
//     });
// });

// Define the connection URL for your local MongoDB
const dbURL = 'mongodb://127.0.0.1:27017/odenDB'; // Replace 'your-database-name' with your database name

// Connect to the MongoDB database
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle MongoDB connection events
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the MongoDB database');
});



//setting static files
app.use(
    express.static(path.join(__dirname, "public"), {
      setHeaders: (res, filePath) => {
        if (filePath.endsWith(".css")) {
          res.setHeader("Content-Type", "text/css");
        }
      },
    }
  ));

//use bodyparser
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

//importantation from controllers
const contactPost = require ('./controllers/contactPost.js');
const reservationPost = require ('./controllers/reservationPost.js');
const reviewPost = require ('./controllers/reviewPost.js');

//admin importantation from controllers 
const adminLoginPost = require ("./controllers/adminLoginPost.js");
const adminRegisterPost = require ("./controllers/adminRegisterPost.js");
const addPricelistPost = require ("./controllers/addPricelistPost.js");
const menuPost = require ("./controllers/menuPost.js");
const galleryPost = require ("./controllers/galleryPost.js")
const editReservationPost = require ("./controllers/editReservationPost.js");
const editMenuPost = require ("./controllers/editMenuPost.js");
const editPricePost = require ("./controllers/editPricePost.js");

//importantation from models 
const homePage = require ('./models/homePage.js');
const contactPage = require ('./models/contactPage.js');
const pricelistPage = require ('./models/pricelistPage.js');
const addPricelistPage = require ("./models/addPricelistPage.js");
const galleryPage = require("./models/galleryPage.js");

//admin importantation from models 
const adminLogin = require ("./models/adminLoginPage.js");
const adminLogout = require ("./models/adminLogoutPage.js");
const adminPage = require ("./models/adminPage.js");
const adminMenuPage = require ("./models/adminMenuPage.js");
const reservationPage = require ("./models/reservationPage.js");
const reviewsPage = require ("./models/reviewsPage.js");
const adminContactPage = require ("./models/adminContact.js");
const adminGalleryPage = require ("./models/adminGalleryPage.js");
const editReservationPage = require ("./models/editReservationPage.js");
const editMenuPage = require ("./models/editMenuPage.js");
const editPricePage = require ("./models/editPricePage.js");

//admin delete
const deleteReservation = require ("./models/deleteReservation.js")
const deleteMenu = require ("./models/deleteMenu.js")
const deletePrice = require ("./models/deletePrice.js")
const deleteGallery = require ("./models/deleteGallery.js")

//MIME
app.get("/public/css/style.css", (req, res) => {
res.setHeader("Content-Type", "text/css");
res.sendFile(path.join(__dirname, "public/css/style.css"));
});
app.get("/public/css/pricelist.css", (req, res) => {
  res.setHeader("Content-Type", "text/css");
  res.sendFile(path.join(__dirname, "public/css/pricelist.css"));
  });
app.get("/public/css/contact.css", (req, res) => {
res.setHeader("Content-Type", "text/css");
res.sendFile(path.join(__dirname, "public/css/contact.css"));
});
app.get("/public/css/gallery.css", (req, res) => {
  res.setHeader("Content-Type", "text/css");
  res.sendFile(path.join(__dirname, "public/css/gallery.css"));
});
app.get("/public/js/script.js", (req, res) => {
res.setHeader("Content-Type", "application/javascript");
res.sendFile(path.join(__dirname, "public/js/script.js"));
});
app.get("/public/images/:imageName", (req, res) => {
// Get the image file name from the request parameters
const imageName = req.params.imageName;

// Determine the correct MIME type based on the file extension
let contentType;
if (imageName.endsWith(".png")) {
    contentType = "image/png";
} else if (imageName.endsWith(".jpg") || imageName.endsWith(".jpeg")) {
    contentType = "image/jpeg";
} else {
    // You may need to add more MIME types for other image formats
    // For example, for GIF, you can add: else if (imageName.endsWith(".gif")) contentType = "image/gif";
    // Make sure to include the appropriate MIME types for the image formats you're serving
}

// Set the Content-Type header based on the determined MIME type
res.setHeader("Content-Type", contentType);

// Serve the image file
res.sendFile(path.join(__dirname, "public/images", imageName));
});


//get methods
app.get("/", homePage);
app.get("/contact", contactPage);
app.get("/pricelist", pricelistPage);
app.get("/gallery", galleryPage);


//admin Get
app.get("/admin",isAdminLoggedIn, adminPage);
app.get("/admin/menu",isAdminLoggedIn, adminMenuPage);
app.get("/admin/addPricelist",isAdminLoggedIn, addPricelistPage);
app.get("/admin/reservations",isAdminLoggedIn, reservationPage);
app.get("/admin/reviews",isAdminLoggedIn, reviewsPage);
app.get("/admin/contact",isAdminLoggedIn, adminContactPage);
app.get("/admin/gallery",isAdminLoggedIn, adminGalleryPage);
app.get("/searchReservations",isAdminLoggedIn, reservationPage);
app.get("/edit-reservation/:id",isAdminLoggedIn, editReservationPage);
app.get("/edit-menu/:id",isAdminLoggedIn, editMenuPage);
app.get("/edit-price/:id",isAdminLoggedIn, editPricePage);
//login an admin
app.get("/admin-login", adminLogin)
//logout an admin
app.get('/admin/logout', adminLogout);
//

//posts methods
app.post("/submitReservation", reservationPost);
app.post("/submitReview", reviewPost);
app.post("/contact", contactPost);

//admin Post
app.post("/addNewPricelist",isAdminLoggedIn, addPricelistPost);
app.post("/addnewmenu",isAdminLoggedIn, menuPost);
app.post("/add-new-gallery-picture", isAdminLoggedIn, galleryPost)
app.post("/edit-reservation/:id",isAdminLoggedIn, editReservationPost);
app.post("/edit-menu/:id",isAdminLoggedIn, editMenuPost);
app.post("/edit-price/:id",isAdminLoggedIn, editPricePost);
//login an admin
app.post('/admin-login', adminLoginPost);
// Register an admin
app.post('/admin-register', adminRegisterPost);



//admin DELETE methods
app.delete("/delete-reservation/:id",isAdminLoggedIn, deleteReservation);
app.delete("/delete-menu/:id",isAdminLoggedIn, deleteMenu);
app.delete("/delete-price/:id",isAdminLoggedIn, deletePrice);
app.delete("/delete-gallery/:id",isAdminLoggedIn, deleteGallery);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

