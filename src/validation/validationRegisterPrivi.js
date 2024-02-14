const {body} = require('express-validator');
const {getJson} = require("../utility/jsonMethod");
const users = getJson('users');

module.exports = [
    //Input: Name
    body('name').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isLength({min:3,max:30}).withMessage("El valor ingresado debe tener al menos 3 caracteres y maximo 30").bail(),

    //Input:Email
    body('email').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isEmail().withMessage('*Debe ser un correo con formato valido*').bail()
    .custom(value => {
        console.log("value:",value);
        const user = users.find(elemento => elemento.email == value);//Esta logica evalua que no este el mismo mail registrado.
        return user ? false : true
    }).withMessage("El usuario ya existe, utilice otro correo electronico"),

    //Input:Password
    body('password').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isLength({min:3, max:20}).withMessage("El minimo son 3 caracteres y el maximo es de 20").bail(),

    //Input:Image
    body('image').custom((value, {req})=>{
        if (req.errorImgProfile) {
            return false;
        };
        return true;
    }).withMessage("Esta imagen no tiene un formato valido")

];