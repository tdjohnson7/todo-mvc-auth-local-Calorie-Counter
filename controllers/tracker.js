const Target = require('../models/Target')
// const Calorie = require('../models/Calorie')

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
    },
    // method needs finished: by Cy, this will add the food item and calorie count recieved in the request to the database.
    addFoodItem: async (req, res)=>{
        console.log(req.body)
        res.sendStatus(200)
    }
}