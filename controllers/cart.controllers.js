const { Product } = require('../models/product.model')
const { Cart } = require('../models/cart.model')
const { product } = require('./product.controllers')
const { User } = require('../models/users.model')
module.exports = {

      createCart: async (req, res) => {
        // User.findById({
        //     id: req.body.id
        // })
     Product.findOne({
            _id: req.params.id
            // })
            // .then((product) => {
            //     if(product){
            //         return true;
            //     }
            //     return false;
        }).then((Product) => {
            if (Product) {
                let newCart = new Cart({
                    userid: req.body.userid,
                    prodid: req.params.id,
                    pname: Product.pname,
                    price: Product.price,
                    url: Product.url,
                    quantity: req.body.quantity,
                    size: req.body.size

                });
                newCart.save().then(() => {
                    // res.send(newscoreDoc);
                    res.status(201).json({
                        success: true,
                        massage: 'success',
                        cart: newCart
                    })
                })
            } else {
                res.sendStatus(404);
            }
        })

    },


    viewCart: async (req, res) => {
        try {
            await Cart.find({
                userid: req.params.id
                }).then((cart) => {
                    console.log(cart);
                    res.send(cart);
                
                })
            
            // const cart = await Cart.find({}, { __v: 0 })
            // if (!cart) {
            //     res.status(404).json({
            //         success: false,
            //         message: 'product does not exists'
            //     })
            // }
            // res.status(200).json({
            //     success: true,
            //     cart: cart
            // })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },


    deleteCartProduct: async (req, res) => {
        try {
            const result = await Cart.findByIdAndDelete(req.params.id)
            if (!result) {
                res.status(404).json({
                    success: false,
                    message: 'product Not Found'
                })
            }
            res.status(200).json({
                success: true,
                result: result
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },


    deleteCart: async (req, res) => {
        try {
            const result = await Product.findAndDelete({}, { __v: 0 })
            if (!result) {
                res.status(404).json({
                    success: false,
                    message: 'Product Not Found'
                })
            }
            res.status(200).json({
                success: true,
                result: result
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },
}