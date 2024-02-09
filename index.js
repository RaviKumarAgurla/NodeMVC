var express = require('express');
var {connect} = require('./connection')
var userRouter = require('./routes/user')
var {basicMiddleware} = require('./middlewares')



var app = express();

// DB Connection
connect('mongodb://localhost:27017/users')

// Middlewares
app.use(express.urlencoded({extended: false}))

app.use(basicMiddleware())

// Routes
app.use('/api/users', userRouter)



app.listen(8000, ()=> {
    console.log('server is started')
})