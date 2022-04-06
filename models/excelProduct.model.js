const mongoose = require('mongoose');
const Schema = mongoose.Schema


const excelProductSchema = new Schema({
    // catName:{
    //     type: String,
    //     default: null
    // },
    pname: {
        type: String,
        default: null
    },
    price: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    rating: {
        type: Number,
        default: 0
    },
    // url: {
    //     type: String,
    //     default: null
    // },
    status: {
        type: Number,
        default: 1
    }
}, { timestamps: true })

const excelProduct = mongoose.model('excelProduct', excelProductSchema)

module.exports = { excelProduct }