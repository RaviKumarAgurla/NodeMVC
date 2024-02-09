var express = require('express');
var router = express.Router();
var {getUsers, createUser, getUserById, updateUserById, deleteUserById} = require('../controllers/userController')


// router.get('/', async (req, res)=> {
//     var users = await User.find({});
//     var elements = `<ul>${users.map(user => `<li>${user.firstName} - ${user.email}</li>`).join('')}</ul>`
//     return res.send(elements)
// })

router.get('/', getUsers)

router.post('/', createUser)

router.route('/:id')
    .get(getUserById)
    .patch(updateUserById)
    .delete(deleteUserById)


module.exports = router