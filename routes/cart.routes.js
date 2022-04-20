const express = require('express');
const router = express.Router();
const { verifyAccessToken } = require('../helpers/auth')

const cartController = require('../controllers/cart.controllers')

router.post('/addCart/:id',verifyAccessToken,cartController.createCart)
router.get('/viewCart/:id',verifyAccessToken, cartController.viewCart)
router.delete('/deleteCartProduct/:id', cartController.deleteCartProduct)

router.delete('/deleteCart',  cartController.deleteCart)



module.exports = router