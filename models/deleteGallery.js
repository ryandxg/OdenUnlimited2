const Gallery = require("../models/gallery.js");

async function deleteGallery (req,res) {
    try {
      const DeletedGallery = await Gallery.findByIdAndDelete(req.params.id);
      // console.log(DeletedGallery);
      res.redirect("/admin/gallery")
    } catch (error) {
      // console.error(error);
      res.status(500).send('Internal Server Error');
    }
}

module.exports = deleteGallery