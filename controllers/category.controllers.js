const { Categories } = require('../models/categories.model')
module.exports = {
    category_list: async (req, res) => {
        try {
            const category = await Categories.find({}, { __v: 0 })
            if (!category) {
                res.status(404).json({
                    success: false,
                    message: 'category does not exists'
                })
            }
            res.status(200).json({
                success: true,
                category: category
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },
    category: async (req, res) => {
        try {
            const category = await Categories.findById(req.params.catid, { __v: 0 })
            if (!category) {
                res.status(404).json({
                    success: false,
                    message: 'product not found!!!'
                })
            }
            res.status(200).json({ 
                success: true,
                category: category
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },
    createCategory: async (req, res) => {
        const category = new Categories({
            cname: req.body.cname,
            description: req.body.description
        })

        await category.save().then(() => {
            return res.status(201).send({
                success: true,
                message: 'success',
                category: category
            })
        }).catch((error) => {
            res.status(500).json({
                success: false,
                message: error.message
            })
        })
    },
    deleteCategory: async (req, res) => {
        try {
            const result = await Categories.findByIdAndDelete(req.params.catid)
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
    updateCategory: async (req, res) => {
        try {
            const id = req.params.catid
            const updates = req.body
            const options = { new: true }
            const update = await Categories.findByIdAndUpdate(id, updates, options)
            if (!update) {
                res.status(404).json({
                    success: false,
                    message: 'Product not found!!!'
                })
            }
            res.status(200).json({
                success: true,
                update: update
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
}