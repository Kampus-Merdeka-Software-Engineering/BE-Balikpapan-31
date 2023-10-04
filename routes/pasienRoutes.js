const express = require('express');
const { pasienController } = require('../controllers');
const router = express.Router();

// get all books
router.get('/pasien', pasienController.getPasiens);
router.post('/pasien', pasienController.createPasien);

module.exports = router;