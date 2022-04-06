const multer = require('multer')
const path = require('path')
var storageFile = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/profile')
    },
    filename: function (req, file, cb) {
        cb(null, 'profile' + + Date.now() + path.extname(file.originalname))
    }
})


module.exports = {
    upload: multer({ storage: storageFile })
}