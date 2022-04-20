const mongoose = require('mongoose');
const Schema = mongoose.Schema


const cartSchema = new Schema({
    userid: {
        type: String
    },
    pname: {
        type: String,
        default: null
    },
    url: {
        type: String,
        default: null
    },

    price: {
        type: Number,
        default: 0
    },
    prodid: {
        type: String,
        default: null
    },
    quantity: {
        type: Number,
        
    },
    size: {
        type: String,
        
    },


    status: {
        type: Number,
        default: 1
    }
}, { timestamps: true })

const Cart = mongoose.model('tbl_cart', cartSchema)

module.exports = { Cart }