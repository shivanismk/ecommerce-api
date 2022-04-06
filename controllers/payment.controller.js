
const stripe = require('stripe')('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');

const account = await stripe.accounts.create({type: 'express'});
// module.exports = {
//     paymentCreat: async (req, res) => {
//         const  = new User({
//             fname: req.body.fname,
//             lname: req.body.lname,
//             email: req.body.email,
//             roles: req.body.roles,
//             password: req.body.password,
//             phone: req.body.phone,
//             url: `/${req.file.destination}/${req.file.filename}`
//         }) 
//     }
// }