let Razorpay = require('razorpay');

var instance = new Razorpay({
  key_id: 'rzp_test_2RLLx1qMYTSvkf',
  key_secret: 'FZC2GqphbPEtH54SHchcgfe7',
});

  let RazorpayConfig={
    key_id: 'RAZORPAY_KEY_HERE',
    key_secret: 'RAZORPAY_SECRET_HERE'
  }
  module.exports.config = RazorpayConfig;
  module.exports.instance = instance;