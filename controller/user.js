const User = require('../models/User')
module.exports = {
    index : async(req, res) => {
        try{
            const users = await User.find();
            if(users.length > 0){
                res.status(200).json({
                    status: true,
                    data: users,
                    method: req.method,
                    url: req.url
                })
            }else{
                res.json({
                    status: false,
                    message:'User cant be found...'
                })
            }
        }catch(error){
            res.status(400).json({
                success: false
            })
        }
    },
    store  : async(req, res) => {
        try{
            const user = await User.create(req.body)
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: 'User has been created...'
            })
        } catch(error){
            res.status(400).json({success: false})
        }
    },
    update : async(req, res) => {
        try{
            const user = await User.findByIdAndUpdate(req.params.id,req.body,{
                new:true,
                runValidators: true
            })
            res.json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: 'data has been updated...'
            })
        } catch(error){
            res.status(400).json({success: false})
        }
    },
    delete : async(req, res) => {
        try{
            await User.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: 'data has been deleted...'
            })
        }catch(error){
            res.status(400).json({success: false})
        }
    },
    show : async(req, res) => {
        try{
            const user = await User.findById(req.params.id)
            res.json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: 'Got the data you wanted'
            })
        } catch(error){
            res.status(400).json({success: false})
        }
    },
}