var mongoose = require('mongoose')


function connect(connectionString) {
    mongoose
    .connect(connectionString)
    .then(()=> {
        console.log('mongoDB connected')
    })
    .catch((err)=> {
        console.log('monogoDB failed to connect', err)
    })
}


module.exports = {
    connect
}