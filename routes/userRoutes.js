const express = require('express');
const router = express.Router();
const { getAllUser , createAppointment } = require('../controllers/checkAppointmentController')

router.get('/appointment/:appointmetDate', getAllUser);


router.post('/bookAppointment', createAppointment);

module.exports = router;