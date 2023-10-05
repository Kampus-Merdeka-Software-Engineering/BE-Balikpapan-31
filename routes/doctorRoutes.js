const express = require('express');
const { doctorController } = require('../controllers');
const router = express.Router();

// get all books
router.get('/doctor', doctorController.getDoctors);
router.post('/doctor', doctorController.createDoctor);

module.exports = router;