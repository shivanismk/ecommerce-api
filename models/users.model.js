const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema


const userSchema = new Schema({
    fname: {
        type: String,
        default: null
    },
    lname: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: null
    },
    url: {
        type: String,
        default: null
    },
    roles: {
        // Role of user it will be (normal or admin )
        type: String,
        default: "user",
        enum:["user","admin"],
      },
    status: {
        type: Number,
        default: 1
    }
}, { timestamps: true })

// hash password before saving to database
userSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(this.password, salt)
        this.password = hashPassword
        next()
    } catch (error) {
        next(error);
    }
});

// validate Password
userSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        throw error
    }
}

const User = mongoose.model('tbl_users', userSchema)

module.exports = { User }