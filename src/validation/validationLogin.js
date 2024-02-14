const {body} = require('express-validator');


module.exports =[
    body('usuario').isEmail().withMessage('Tienes que ingresar un email valido').bail(),
    body('password').notEmpty().withMessage("El campo no puede estar vacio").bail()
]