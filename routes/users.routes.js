const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.controllers')

const { upload } = require('../middleware/profileImg')

// @user registers routes
router.post('/register',upload.single('url'), userController.registerUser)


router.post('/login', userController.loginAdmin)

// @ Admin login routes
router.get('/login/:Aid', userController.loginAid)

router.get('/userList',userController.userList)


module.exports = router