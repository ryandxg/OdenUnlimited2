const Gallery = require ("../models/gallery");

async function galleryPost (req, res){
    try{
        const image = req.body.image

        const newGallery = new Gallery({
            image: image,
        });
       
        const savedGallery = await newGallery.save();

        // console.log('Gallery saved:', savedGallery);
        res.redirect("/admin/gallery");
    } catch(err) {
        // console.error(err);
    }
}

module.exports = galleryPost;