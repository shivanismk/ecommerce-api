
const { Checkout } = require('../models/checkout.model')

const { Cart } = require('../models/cart.model');
const stripe  = require("stripe")("sk_test_51KjKdSSD8WAUVnUwoS24YDEtR9MAF632dWESH6ze2nBRTHjUnloMkoqZz7sO3W3oWoC1xejktZs0X78ezf52pVsr003UIoMbbr");


module.exports = {
    createCustomeres: async (req, res) => {

    },

goCheck: async (req, res) => {

  console.log(stripe);
var token = req.body.email
var token = req.body
try{
stripe.customers.create({
            email: req.body.email,
            source:token.id,
            name: 'Gautam Sharma',
            address: {
                line1: 'TC 9/4 Old MES colony',
                postal_code: '110092',
                city: 'New Delhi',
                state: 'Delhi',
                country: 'India',
            }
        })
    }
        catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
        console.log(token)
            .then((customer) => {

                return stripe.charges.create({
                    amount: 7000,    // Charing Rs 25
                    description: 'Web Development Product',
                    currency: 'USD',
                    customer: customer.id
                });
            })
            .then((charge) => {
                res.send("Success") // If no error occurs
            })
            .catch((err) => {
                res.send(err)    // If some error occurs
            });
        }
    //     catch (error) {
    //         res.status(500).json({
    //             success: false,
    //             message: error.message
    //         })
    //     }
    // }
    , createCheckout: async (req, res) => {
        const cart = await Cart.find({}, { __v: 0 }).then((cart) => {

            const cartdetail = cart
            console.log(cartdetail);

            if (!cart) {
                return false;
            }
            // }).then((product) => {

            if (true) {
                console.log(cartdetail);
                const checkout = new Checkout({
                    fname: req.body.fname,
                    lname: req.body.lname,
                    uname: req.body.uname,
                    email: req.body.email,
                    mobile: req.body.mobile,
                    address: req.body.address,
                    state: req.body.state,
                    city: req.body.city,
                    zip: req.body.zip,
                    size: req.body.size,
                    amount: req.body.amount,
                    quantity: req.body.quantity,
                    cartdetail: cartdetail,

                })

                checkout.save().then((orders) => {

                    res.send(orders);
                })

            } else {
                res.sendStatus(404);
            }
        })

    },

    getOrder: async (req, res) => {
        try {
            const checkout = await Checkout.find({}, { __v: 0 })
            if (!checkout) {
                res.status(404).json({
                    success: false,
                    message: 'product does not exists'
                })
            }
            res.status(200).json({
                success: true,
                checkout: checkout
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },

    deleteOrder: async (req, res) => {
        try {
            const result = await Checkout.findByIdAndDelete(req.params.Oid)
            if (!result) {
                res.status(404).json({
                    success: false,
                    message: 'order Not Found'
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
    }
}

