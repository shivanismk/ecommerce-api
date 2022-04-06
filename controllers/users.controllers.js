const { User } = require('../models/users.model')
const { signAccessToken } = require('../helpers/auth')
module.exports = {
    registerUser: async (req, res) => {
        const user = new User({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            roles: req.body.roles,
            password: req.body.password,
            phone: req.body.phone,
            url: `/${req.file.destination}/${req.file.filename}`
        })
            
       await  user.save()
                .then(() => {
                    res.status(201).json({
                        success: true,
                        message: 'success',
                        user: user
                    })
                }).catch(err => {
                    res.status(201).json({
                        success: false,
                        message: err.message
                    })
                })
      
    },

    

    loginAdmin: async (req, res) => {
        try {
            let payload = req.body

            const user = await User.findOne({ email: payload.email })

            if (!user) {
                res.status(404).json({
                    success: false,
                    message: 'User Not Found!!!'
                })
            }

            const isMatch = await user.isValidPassword(payload.password)


            if (!isMatch) {
                res.status(400).json({
                    success: false,
                    message: 'Username/password not valid'
                })
            }

            const accessToken = await signAccessToken(user.id.toString())

            res.status(200).send({ user, accessToken })

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },

    loginAid: async( req,res )  =>{
        try {
            const user = await User.findById(req.params.Aid, { __v: 0 })
            if (!user) {
                res.status(404).json({
                    success: false,
                    message: 'user not found!!!'
                })
            }
            res.status(200).json({
                success: true,
                user: user
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },

    userList: async (req,res) =>{

        try {
            const user = await User.find({}, { __v: 0 })
            if (!user) {
                res.status(404).json({
                    success: false,
                    message: 'user does not exists'
                })
            }
            res.status(200).json({
                success: true,
                user: user
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }


}
