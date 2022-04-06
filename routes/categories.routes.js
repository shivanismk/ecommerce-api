const express = require('express');
const router = express.Router();

const { verifyAccessToken } = require('../helpers/auth')

const categoryController = require('../controllers/category.controllers')

router.post('/create_category', verifyAccessToken, categoryController.createCategory)
router.get('/get_categorys', categoryController.category_list)
router.get('/get_category/:catid',  categoryController.category)
router.patch('/update_category/:catid',verifyAccessToken,  categoryController.updateCategory)
router.delete('/delete_category/:catid', verifyAccessToken, categoryController.deleteCategory)

module.exports = router