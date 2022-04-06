const mongoose = require('mongoose');
const Schema = mongoose.Schema


const subCategorySchema = new Schema({
   
    subCatName: {
        type: String,
        default: null
    },
    
}, { timestamps: true })

const subCategory = mongoose.model('subCategory', subCategorySchema)

module.exports = { subCategory }