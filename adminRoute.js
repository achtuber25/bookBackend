const express = require('express');
const router = express.Router();
const adminController = require('./adminController')


router.post('/login', adminController.signup)
router.post('/updateProfile', adminController.updateProfile)



exports.Router = router;