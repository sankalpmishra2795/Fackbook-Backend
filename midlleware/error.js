const ErrorResponse = require("../utils/errorRespons")

const errorHandler = (err,req,res,next) => {
    let error = {...err}
    // load console for dev
    error.message = err.message
    // Mongoose bad Object
    if (err.name === 'CastError') {
        const message = `Facjbook is not found with id of ${err.value}`
        error = new ErrorResponse(message,404)
    }
    // Mongoose Duplicate
    if(err.code === '11000') {
        const message = "Duplicate value Enterd"
        error = new ErrorResponse (message,400)
    }
    // Mongooes Validation 
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message)
        error = new ErrorResponse (message,400)
    }
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
    })

}

module.exports = errorHandler