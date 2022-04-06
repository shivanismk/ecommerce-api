const mongoose = require('mongoose');
const Schema = mongoose.Schema


const categoriesSchema = new Schema({
    cname: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    status: {
        type: Number,
        default: 1
    }
}, { timestamps: true })

const Categories = mongoose.model('tbl_categories', categoriesSchema)

module.exports = { Categories }