const { getJson } = require("../utility/jsonMethod");

const users = getJson('users')
const userLoggedMiddleware = (req,res,next) => {
    if (req.cookies.recuerdame){
        console.log(req.cookies.recuerdame.email)
        for (let i = 0; i < users.length; i++) {
            const element = users[i];
            if (element.email == req.cookies.recuerdame.email && element.name == req.cookies.recuerdame.name && element.id == req.cookies.recuerdame.id) {
                req.session.usuarioLogin = element
            }
            
        }
        }
    next()

}
module.exports = userLoggedMiddleware