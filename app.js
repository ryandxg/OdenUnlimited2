const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

//importantation from controllers
const loginPage = require ('./controllers/loginPage.js');
const loginPost = require ('./controllers/loginPost.js');


//importantation from models
const homePage = require ('./models/homePage.js');

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
app.use(bodyParser.urlencoded({ extended: true}));


//MIME
app.get("/public/css/style.css", (req, res) => {
res.setHeader("Content-Type", "text/css");
res.sendFile(path.join(__dirname, "public/css/style.css"));
});
app.get("/public/css/contact.css", (req, res) => {
res.setHeader("Content-Type", "text/css");
res.sendFile(path.join(__dirname, "public/css/contact.css"));
});
app.get("/public/css/signup.css", (req, res) => {
res.setHeader("Content-Type", "text/css");
res.sendFile(path.join(__dirname, "public/css/signup.css"));
});
app.get("/public/css/login.css", (req, res) => {
res.setHeader("Content-Type", "text/css");
res.sendFile(path.join(__dirname, "public/css/login.css"));
});
app.get("/public/js/script.js", (req, res) => {
res.setHeader("Content-Type", "application/javascript");
res.sendFile(path.join(__dirname, "public/js/script.js"));
});
app.get("/public/js/signup.js", (req, res) => {
res.setHeader("Content-Type", "application/javascript");
res.sendFile(path.join(__dirname, "public/js/signup.js"));
});
app.get("/public/js/login.js", (req, res) => {
res.setHeader("Content-Type", "application/javascript");
res.sendFile(path.join(__dirname, "public/js/login.js"));
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

    

app.get("/", homePage);

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});
app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "signup.html"));
});


app.get("/login", loginPage);

app.post("/login", loginPost);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// app.listen(3000, function(){
//     console.log("server running on port 3000");
// })