const Gallery = require("./gallery");

async function adminGalleryPage(req,res) {
    try {
        const gallery = await Gallery.find({});
        res.render("adminGallery" , { gallery: gallery})
    } catch (error) {
        // console.log(error);
    }
    
}

module.exports = adminGalleryPage