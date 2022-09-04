const Target = require('../models/Target')

module.exports = {
    getTarget: async (req,res)=>{
        console.log(req.user)
        try{
            const targetCalories = await Target.find({userId:req.user.id})
            res.render('tracker.ejs', {target: targetCalories, user: req.user})
        }catch(err){
            console.log(err)
        }
    },

    updateTarget: async (req, res)=>{
        console.log(req.user)
        try{
            await Target.findOneAndUpdate({_id:req.body.TargetIdFromJSFile},{    
                target: req.body.newTargetCal                         
            })
            console.log('Updated calorie target')
            res.json('Updated calorie target')
        }catch(err){
            console.log(err)
        }
    }
}