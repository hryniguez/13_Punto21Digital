const {body} = require('express-validator');

module.exports = [
    //input: name
    body('name').notEmpty().withMessage("El campo no puede estar vacio.").bail()
    .isLength({min:3,max:30}).withMessage("El valor ingresado debe tener al menos 3 caracteres y maximo 30.").bail(),

    //Input: Localidad
    body('localidad').isLength({min:4 , max:30}).withMessage("Minimo de 4 letrasy un Maximo de 30"),

    //Input:Sobremi
    body('sobremi').isLength({min:5, max:500}).withMessage("Minimo 5 letras y un Maximo de 500.").bail(),
    
    //Input:Image Multer (el req.errorImgProfile es un msj creado en la validacion de multer.)
    body('image').custom((value, {req})=>{
        if (req.errorImgProfile) {
            return false;
        };
        return true;
    }).withMessage("Esta imagen no tiene un formato valido")
];