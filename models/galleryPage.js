const Gallery = require("./gallery");

async function galleryPage(req,res){
    try {
        const gallery = await Gallery.find({});
        res.render("gallery" , { gallery: gallery})
    } catch (error) {
        // console.log(error);
    }
}

module.exports = galleryPage;