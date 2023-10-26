const path = require("path");

function galleryPage(req,res){
    res.sendFile(path.join(__dirname, "../views/gallery.html"));
}

module.exports = galleryPage;