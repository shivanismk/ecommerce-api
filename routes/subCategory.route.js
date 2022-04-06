const express = require('express');
const router = express.Router();
const subCatController =  require('../controllers/subCategory.controller')
router.post('/create-subCategory',subCatController.createSubCategory)
 module.exports = router
