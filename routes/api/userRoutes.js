const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// Route for getting all users
router.get('/', getAllUsers);

// Route for getting a user by ID
router.get('/:userId', getUserById);

// Route for creating a new user
router.post('/', createUser);

// Route for updating a user by ID
router.put('/:userId', updateUser);

// Route for deleting a user by ID
router.delete('/:userId', deleteUser);

// Route for adding a friend to a user's friend list
router.post('/:userId/friends/:friendId', addFriend);

// Route for removing a friend from a user's friend list
router.delete('/:userId/friends/:friendId', deleteFriend);

module.exports = router;


