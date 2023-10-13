const users = require ('../models/users.js');

function loginPost(req, res) {
    try{
      const { email, password} = req.body;
    //   const email = req.body.email;
    //   const password = req.body.password;    
      // check if the credentials is valid
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        res.redirect("/");
        // console.log(email);
      } else {
        res.status(500).send('Error occured logging user.');
      }
    } catch(err) {
        console.error(err);
    }
}

module.exports = loginPost;