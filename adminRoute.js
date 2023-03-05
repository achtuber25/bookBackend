const express = require('express');
const router = express.Router();
const adminController = require('./adminController')


router.post('/login', adminController.login)
router.post('/updateProfile', adminController.updateProfile)



exports.Router = router;