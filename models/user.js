var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    gender: {
        type: String
    }
}, {timestamps: true})

var User = mongoose.model('user', userSchema)

module.exports = {
    User
}