const { User } = require('../models');

const userController = {

    // Create a new user
    createUser({ body }, res) {User.create(body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    
    // Get all users
    getAllUsers(req, res) {User.find({})
    .populate({
            path: 'thoughts',
            select: '-__v' // Exclude the "__v" field from the populated thoughts
    })
    .populate({
            path: 'friends',
            select: '-__v' // Exclude the "__v" field from the populated friends
    })
    .select('-__v') // Exclude the "__v" field from the returned users
    .sort({ _id: -1 }) // Sort in descending order based on _id
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    },

    // Get a single user by ID
    getUserById({ params }, res) {User.findOne(
        { _id: params.userId })
        .populate({
            path: 'thoughts',
            select: '-__v' // Exclude the "__v" field from the populated thoughts
        })
        .populate({
            path: 'friends',
            select: '-__v' // Exclude the "__v" field from the populated friends
        })
        .select('-__v') // Exclude the "__v" field from the returned user
        .then((dbUserData) => {
            // If no user found, send 404 status and error message
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
        res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    

    // Update a user by ID
    updateUser({ params, body }, res) {User.findOneAndUpdate(
        { _id: params.userId }, 
        body, 
        {new: true, runValidators: true})
        .then((dbUserData) => {
            // If no user found, send 404 status and error message
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
        res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
        },

    // Delete a user by ID
    deleteUser({ params }, res) {User.findOneAndDelete(
        { _id: params.userId })
        .then((dbUserData) => {
            // If no user found, send 404 status and error message
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            // BONUS: Remove user's associated thoughts
            return Thought.deleteMany({ username: dbUserData.username });
        })
        .then(() => {
            res.json({ message: 'User and associated thoughts deleted!' });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    // Add a friend to a user's friend list
    addFriend({ params }, res) {User.findOneAndUpdate(
        { _id: params.userId },
        { $push: { friends: params.friendId } },
        { new: true })
        .then((dbUserData) => {
            // If no user found, send 404 status and error message
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
        res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    // Remove a friend from a user's friend list
    deleteFriend({ params }, res) {User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } }, 
        { new: true })
        .then((dbUserData) => {
            // If no user found, send 404 status and error message
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
        res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    }
};

module.exports = userController;


