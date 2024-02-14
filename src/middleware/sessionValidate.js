const sessionValidate = (req,res,next)=>{
    if(req.session.usuarioLogin){
        next()
    }
    res.redirect("/users/login");
}

module.exports = sessionValidate