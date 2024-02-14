const multer = require('multer');
const path = require("path");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/users"))
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})

const fileFilter = (req,file,cb)=>{
    const filtro =   /\.(jpg|jepg|png|gif|webp|svg)$/
    if(filtro.test(file.originalname)){
    //Si el archivo subido cumple con este formato, pasa.
    cb(null, true)
    }else{    
    // Si da error de formato envia este msg.
    req.errorImgProfile = "*Esta imagen no tiene un formato valido*"
    cb(null, false)
    }
}




module.exports = multer({ storage, fileFilter})


