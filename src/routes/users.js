const express = require('express');
const router = express.Router();
const {logout,formRegister,register, formLogin, login, usersEdit,usersUpdate ,
    UsersDashboard, userProfile, userProfileEdit, createPrivileges,
    createUserPrivileges, destroy} = require('../controllers/usersControllers');


const registerValidation = require('../validation/validationRegister');
const loginValidation = require('../validation/validationLogin')
const validationProfile = require('../validation/validationProfile')
const uploadImgPro = require ('../validation/valitationProfileImg')
const validationPrivi = require ('../validation/validationRegisterPrivi')
const sessionValidate = require("../middleware/sessionValidate");
const isAdmin = require("../middleware/isAdminValidate");



router
//al validar la session en el controlador no estamos haciendo que funcione como middleware
.get('/register', formRegister)
.post("/register", uploadImgPro.single("image"),registerValidation, register)

.get('/login', formLogin)
.post("/login", loginValidation, login)

//Dashboard de Usurios
.get('/dashboard',isAdmin, UsersDashboard)

.get('/createPrivileges', isAdmin, createPrivileges)
.post('/createPrivileges',uploadImgPro.single("image"), isAdmin, validationPrivi, createUserPrivileges)

//Edicion de usuarios departe de Dashboar
.get('/update/:id',isAdmin , usersEdit )
.put('/update/:id', uploadImgPro.single("image"), usersUpdate)

//Profile para el usuario y su cambio de informacion
.get('/profile/:id', sessionValidate, userProfile)
.put('/profile/:id', uploadImgPro.single("image"), validationProfile, userProfileEdit)


//Eliminar Usuarios Dashboard
.delete('/delete/:id', isAdmin, destroy)

//Logout
.get('/logout', logout)



module.exports = router;
