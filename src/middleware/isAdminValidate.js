const isAdminValidate = (req,res,next) => {
    if (req.session.usuarioLogin && req.session.usuarioLogin.category == "ADMIN") {
        next();
    } else {
        res.redirect("/");
    }
   
}

module.exports = isAdminValidate;