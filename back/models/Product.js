const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
  name:{
    type: String,
    required: [true, 'can,t be blank']
  },
  description:{
    type:String,
    required:[true,'can t be blank ']
  },
  price:{
    type:String,
    required: [true, "cant t be blacn"]
  },
  category:{
    type: String,
    required:[true, 'can t be blank']
  },
  pictures:{
    type: Array,
    required: true
  }
}, {minimize: false})

const product  = mongoose.model('Product',ProductSchema);
module.exports = product