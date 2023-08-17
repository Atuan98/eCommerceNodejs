const express = require('express')
const morgan = require('morgan')
const {default: helmet} = require('helmet')
const compression = require('compression')


const app = express()

//Init middleware
app.use(morgan("dev"))
/* 
    app.use(morgan("combined"))
    morgan("common")
    morgan("short")
    morgan("tiny")
*/
app.use(helmet())
app.use(compression())
//Init db

//Init routes
app.get('/', (req, res, next) => {
    const strCompress = 'Hello'
    return res.status(200).json({
        message: 'Welcome nodejs',
        metadata: strCompress.repeat(10000)
    })
})

//Handling error

module.exports = app