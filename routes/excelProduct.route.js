const express = require('express');
const router = express.Router();

const excelProduct = require('../controllers/excelProduct.controller')


const { upload } = require('../middleware/uploadExcel')

router.post('/excel_import', upload.single('excel'),excelProduct.excelImport)
router.get('/excel_export',excelProduct.excelExport)

module.exports = router 