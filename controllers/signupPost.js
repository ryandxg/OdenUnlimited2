async function signupPost(req, res) {
    try{
        const { fname, lname, number, email, password, address, } = req.body;

         // Perform validation and password hashing here

        const newUser = ({
            fname, 
            lname, 
            number, 
            email, 
            password, // Hashed and salted password
            address,
        });

        console.log(newUser);
        //await newUser.save();
        res.redirect("/login");

        // res.status(200).send('User registered successfully.');
    } catch(err) {
        console.error(err);
        res.status(500).send('Error registering user.');
    }
}


module.exports = signupPost; 