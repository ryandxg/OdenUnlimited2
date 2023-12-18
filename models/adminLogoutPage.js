async function adminLogout (req, res) {
    try {
        req.session.isAdminLoggedIn = false;
        res.redirect('/admin-login');
    } catch (error) {
        // console.error(error)
    }
}

module.exports = adminLogout;