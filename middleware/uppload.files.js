const multer = require('multer')
const path = require('path')
var storageFile = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/product')
    },
    filename: function (req, file, cb) {
        cb(null, 'product' + + Date.now() + path.extname(file.originalname))
    }
})


module.exports = {
    upload: multer({ storage: storageFile })
}