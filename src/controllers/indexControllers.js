
const fs = require('fs')
const productsJson = fs.readFileSync(__dirname + '../../database/product.json','utf-8')
const products = JSON.parse(productsJson)

const indexController = {
    index:(req,res)=>{
        const continuoProduct  = products.filter(product => product.category === "Digitalizacion_ADF")
        const contactlessProduct = products.filter(product => product.category === "Digitalizacion_libros")

        res.render('index',{title:"Punto 21 Digital",products, continuoProduct, contactlessProduct, usuarioLogeado: req.session.usuarioLogin})
    },
    servicios: function (req, res) {
        const continuoProduct  = products.filter(product => product.category === "Digitalizacion_ADF")
        const contactlessProduct = products.filter(product => product.category === "Digitalizacion_libros")
        // res.send("Aca va la ruta de Servicios")
        
    res.render('servicios', { title:"Punto 21 - Servicios",products, continuoProduct, contactlessProduct, usuarioLogeado: req.session.usuarioLogin});
    // res.render('servicios', { title:"Servicios",products, continuoProduct, contactlessProduct, usuarioLogeado: req.session.usuarioLogin});
    },
    nosotros: function (req, res) {
        const continuoProduct  = products.filter(product => product.category === "Digitalizacion_ADF")
        const contactlessProduct = products.filter(product => product.category === "Digitalizacion_libros")
        // res.send("Aca va la ruta de Servicios")
        
    res.render('nosotros', { title:"Punto 21 - Nosotros",products, continuoProduct, contactlessProduct, usuarioLogeado: req.session.usuarioLogin});
    // res.render('servicios', { title:"Servicios",products, continuoProduct, contactlessProduct, usuarioLogeado: req.session.usuarioLogin});
    },
    clientes: function (req, res) {
        const continuoProduct  = products.filter(product => product.category === "Digitalizacion_ADF")
        const contactlessProduct = products.filter(product => product.category === "Digitalizacion_libros")
        // res.send("Aca va la ruta de Servicios")
       
     res.render('clientes', { title:"Punto 21 - Clientes",products, continuoProduct, contactlessProduct, usuarioLogeado: req.session.usuarioLogin});
    // res.render('servicios', { title:"Servicios",products, continuoProduct, contactlessProduct, usuarioLogeado: req.session.usuarioLogin});

    }
}


module.exports = indexController