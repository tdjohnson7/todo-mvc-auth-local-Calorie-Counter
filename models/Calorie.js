//new tdjohnson7
// modified by Cy
const mongoose = require('mongoose')

const CalorieSchema = new mongoose.Schema({
  foodItems: {
    type: Array,
    required: true,
    default:[]
  },
  date:{
    type:Date,
    required:true,
    default:Date.now()
  },
  sum:{
    type:Number,
    default:0,
    required:true
  },
  goalMet: {
    type: Boolean,
    required: true,
    default:false
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Calorie', CalorieSchema)