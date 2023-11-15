const Contact = require("./contacts")

async function AdminContactPage(req,res){
    const contact = await Contact.find({});
    res.render("adminContact", {contact: contact});
}

module.exports = AdminContactPage;