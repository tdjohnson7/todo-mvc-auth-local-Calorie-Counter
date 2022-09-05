const User = require('../models/User')
const Target = require('../models/Target')

module.exports = {
    getTarget: async (req,res)=>{
        console.log(req.user)
        try{
            const targetCalories = await User.find({userId:req.user.id})
            res.render('tracker.ejs', {target: targetCalories, user: req.user})
        }catch(err){
            console.log(err)
        }
    },

    updateTarget: async (req, res)=>{
        try{
            await User.findByIdAndUpdate(
                {_id:req.user.id},
                {targetCalories: req.body.newTargetCal}
                )
            console.log('Updated calorie target')
            res.redirect('/tracker')
        }catch(err){
            console.log(err)
        }
    }
}