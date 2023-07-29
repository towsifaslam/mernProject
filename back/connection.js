require('dotenv').config();
const mongoose = require('mongoose')

const connectionStr = `mongodb+srv://ecommerc:ecommerc1122@cluster0.glfvipj.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(connectionStr,{useNewUrlparser:true})
        .then(()=>console.log('connectd to mongodb'))
        .catch(err=>console.log(err))

