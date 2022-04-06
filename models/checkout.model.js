const mongoose = require('mongoose');
const Schema = mongoose.Schema


const checkoutSchema = new Schema({
    fname: {
        type: String,
        default: null
    },
    lname: {
        type: String,
        default: null
    },
    uname: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    mobile: {
        type: Number,
        default: 0
    },
    address: {
        type: String,
        default: null
    },
    state: {
        type: String,
        default: null
     },
     city: {
        type: String,
        default: null
     },
    zip: {
        type: Number,
        default: 0
     },

     cartdetail: {
        type: [],
        default: null
     },
     amount:{
        type:Number,
        default:0
     },
   
    status: {
        type: Number,
        default: 1
    }
},
 { timestamps: true })

const Checkout = mongoose.model('tbl_checkout', checkoutSchema)

module.exports = { Checkout }