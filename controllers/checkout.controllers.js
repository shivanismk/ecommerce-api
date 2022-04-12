const { Checkout } = require("../models/checkout.model");
const { Cart } = require("../models/cart.model");

module.exports = {
  createCustomeres: async (req, res) => {
    const Razorpay = require("razorpay");
    const razorpay = new Razorpay({
      key_id: "rzp_test_2RLLx1qMYTSvkf",
      key_secret: "FZC2GqphbPEtH54SHchcgfe7",
    });
    const captureResult = await razorpay.customers.create({
        name: "golu1",
        contact: 9123456780,
        email: "golu1@example.com",
      }).then((res) => {
        return res;
      }).catch((err) => {
        return err;
      });
    res.status(200).json({
      success: true,
      customer: captureResult,
    });

  },

  goCheck:  (req, res) => {
    const Razorpay = require("razorpay");
   
    const  instance = new Razorpay({ key_id: 'rzp_test_2RLLx1qMYTSvkf', key_secret: 'FZC2GqphbPEtH54SHchcgfe7' })
    
   const order= instance.orders.create({
      amount: 50000,
      currency: "INR",
      receipt: "receipt#1",
      notes: {
        key1: "value3",
        key2: "value2"
      }
    })
    .then((res) => {
        return res;
      }).catch((err) => {
        return err;
      });
    res.status(200).json({
      success: true,
      customer: order,
    });
    
  },



  createCheckout: async (req, res) => {
    const cart = await Cart.find({}, { __v: 0 }).then((cart) => {
      const cartdetail = cart;
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
        });

        checkout.save().then((orders) => {
          res.send(orders);
        });
      } else {
        res.sendStatus(404);
      }
    });
  },

  getOrder: async (req, res) => {
    try {
      const checkout = await Checkout.find({}, { __v: 0 });
      if (!checkout) {
        res.status(404).json({
          success: false,
          message: "product does not exists",
        });
      }
      res.status(200).json({
        success: true,
        checkout: checkout,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  deleteOrder: async (req, res) => {
    try {
      const result = await Checkout.findByIdAndDelete(req.params.Oid);
      if (!result) {
        res.status(404).json({
          success: false,
          message: "order Not Found",
        });
      }
      res.status(200).json({
        success: true,
        result: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};
