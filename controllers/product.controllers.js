const { Product } = require('../models/product.model')

module.exports = {
    product_list: async (req, res) => {
        try {
            const product = await Product.find({}, { __v: 0 })
            if (!product) {
                res.status(404).json({
                    success: false,
                    message: 'product does not exists'
                })
            }
            res.status(200).json({
                success: true,
                product: product
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },
    
    product: async (req, res) => {
        try {
            const product = await Product.findById(req.params.prodid, { __v: 0 })
            if (!product) {
                res.status(404).json({
                    success: false,
                    message: 'product not found!!!'
                })
            }
            res.status(200).json({
                success: true,
                product: product
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },
    createProduct: async (req, res) => {
        const product = new Product({
            for:req.body.for,
            catName:req.body.catName,
            pname: req.body.pname,
            price: req.body.price,
            description: req.body.description,
            rating: req.body.rating,
            url: `/${req.file.destination}/${req.file.filename}`
        })
        await product.save()
                     .then(() => {
                        return res.status(201).send({
                        success: true,
                        message: 'success',
                        product: product
            })
        }).catch((error) => {
            res.status(500).json({
                success: false,
                message: error.message
            })
        })
    },
    deleteProduct: async (req, res) => {
        try {
            const result = await Product.findByIdAndDelete(req.params.prodid)
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
    updateProduct: async (req, res) => {
        try {
            const id = req.params.prodid
            const updates = req.body
            const options = { new: true }
            const update = await Product.findByIdAndUpdate(id, updates, options)
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
    },




  }
  




