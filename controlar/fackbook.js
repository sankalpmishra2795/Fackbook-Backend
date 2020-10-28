// @desc     Get all fackbook
// @Rout     GET/api/v1/fackbook
// @access   Public

const Fackbook = require("../model/Login")
const ErrorResponse = require('../utils/errorRespons')
const asyncHandler = require('../midlleware/asyinc')

exports.getfackbooks = asyncHandler( async (req,res,next) => {
    console.log()
        const fackbook = await Fackbook.find()
        res.status(200).json({success:true,count:fackbook.length, data: fackbook})
   
   
 
})

// @desc     Get single fackbook
// @Rout     GET/api/v1/fackbook/:id
// @access   Public

exports.getfackbook = asyncHandler( async (req,res,next) => {
    
        const fackbook = await Fackbook.findById(req.params.id)
        console.log(fackbook,'-----')
        if (!fackbook ) {
            return next( new ErrorResponse (`Fackbook is not found with id of ${req.params.id}`,404))
        }
        res.status(200).json({success:true, data: fackbook})


   
   
})

// @desc     Create fackbook
// @Rout     POST/api/v1/fackbooks
// @access   Public

exports.createfackbook = asyncHandler (async (req,res,next) => {
        console.log(req.body,'--------')
        const fackbook = await Fackbook.create(req.body)
        res.status(201)
        .json(
            {success: true,
            msg:'create new fackbook',
            data : fackbook
        })
   

  

})

// @desc     Update fackbook
// @Rout     PUT/api/v1/fackbooks/:id
// @access   Privet

exports.updatefackbook = asyncHandler (async (req,res,next) => {
    const fackbook = await Fackbook.findByIdAndUpdate(req.params.id ,req.body,{
        new: true,
        runValidators: true
    })
    if (!fackbook ) {
        return res.status(400).json({success:false})
    }
    res.status(200).json({success:true, data: fackbook})
})

// @desc     DELETE fackbook
// @Rout     DELETE/api/v1/fackbooks/:id
// @access   Public

exports.deletefackbook = asyncHandler (async (req,res,next) => {
  
    const fackbook = await Fackbook.findByIdAndDelete(req.params.id )
    if (!fackbook ) {
        return res.status(400).json({success:false})
    }
    res.status(200).json({success:true, data: {}})
  
})