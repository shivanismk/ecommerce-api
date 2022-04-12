const express = require('express');
const router = express.Router();



const checkoutController = require('../controllers/checkout.controllers')

const { verifyAccessToken } = require('../helpers/auth')

router.post('/checkout', checkoutController.createCheckout)

router.post('/check_order', checkoutController.goCheck)
router.get('/orders', checkoutController.getOrder)
router.delete('/delete_order/:Oid',  checkoutController.deleteOrder)
router.post('/customers', checkoutController.createCustomeres)
module.exports = router