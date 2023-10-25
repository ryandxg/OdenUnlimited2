const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
// const format = require('date-fns/format');


const app = express();
const port = 3000;


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
const reservations = require ('./controllers/reservations.js');
const reviewPost = require ('./controllers/reviewPost.js');


//importantation from models 
const homePage = require ('./models/homePage.js');
const contactPage = require ('./models/contactPage.js');
const pricelistPage = require ('./models/pricelistPage.js');


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


//methods
app.get("/", homePage);

app.get("/contact", contactPage);

app.get("/pricelist", pricelistPage);

app.post("/submitReservation", reservations);
app.post("/submitReview", reviewPost);
app.post("/contact", contactPost);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

