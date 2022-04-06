require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
var cors = require('cors')
const PORT = process.env.PORT || 5000

require('./config/mongoose.connection')()

app.use(bodyParser.json())
app.use(cors())

app.use('/public', express.static('public'))

app.use(morgan('dev'))

app.use('/api', require('./routes/users.routes'))
app.use('/api', require('./routes/product.routes'))
app.use('/api', require('./routes/categories.routes'))
app.use('/api', require('./routes/checkout.routes'))
app.use('/api', require('./routes/cart.routes'))
app.use('/api', require('./routes/excelProduct.route'))
app.use('/api', require('./routes/subCategory.route'))

app.listen(PORT, () => {
    console.log('server on running...')
})