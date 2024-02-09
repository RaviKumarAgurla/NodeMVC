var {User} = require('../models/user')

async function getUsers(req, res) {
    var users = await User.find({});
    return res.send(users)
}

async function createUser(req, res) {
    var body = req.body
    if(!body ||
        !body.firstName ||
        !body.email ||
        !body.jobTitle){
            return res.status(400).json('Please add all the required fields')
        }
    console.log(req)
    var result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        jobTitle: body.jobTitle,
        gender: body.gender
    })
    console.log('got something to post', result);
    
    res.status(201).send('success');
}

async function getUserById(req, res) {
    var user = await User.findById(req.params.id)
    return res.send(user)
}

async function updateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, {lastName: 'agurla'});
    return res.status(200).json({status: 'success'});
}

async function deleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "Success"});
}
module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
}