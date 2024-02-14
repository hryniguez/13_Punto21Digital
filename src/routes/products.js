const express = require('express');
const router = express.Router();
const {index,  productCart, productDetail, dashboard, productLoad, create, productEdit, update, destroy} = require('../controllers/productsControllers')
const multer = require("multer");
const path = require("path");

const sessionValidate = require("../middleware/sessionValidate");
const isAdmin = require("../middleware/isAdminValidate");

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, path.join(__dirname, "../../public/images/products"))
    },
    filename: (req, file, cb) => {
        cb(null,`${Date.now()}_img_${path.extname(file.originalname)}` )
    }
})

const uploadFile = multer({ storage})



router
.get("/", index)

.get('/carrito', sessionValidate, productCart)
.get('/carrito/:id', sessionValidate, productCart)

.get('/detalle/:id', productDetail)

.get('/dashboard', isAdmin, dashboard)

.get("/create", isAdmin, productLoad)
.post("/",uploadFile.single("image"), isAdmin, create)

.get("/update/:id", isAdmin, productEdit)
.put("/update/:id", isAdmin, update)

.delete('/delete/:id', isAdmin, destroy)



module.exports = router;

