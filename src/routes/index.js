const express = require('express');
const router = express.Router();
const {index, servicios,nosotros,clientes} = require('../controllers/indexControllers')

/* GET home page. */
router.get('/', index);
router.get('/servicios', servicios);
router.get('/nosotros', nosotros);
router.get('/clientes', clientes);

module.exports = router;
