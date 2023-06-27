const { Thought, User } = require('../models');

const thoughtController = {
  // Create a new thought
  createThought({ body }, res) {
    Thought.create(body)
      .then((dbThoughtData) => {
        // Add the created thought's ID to the associated user's thoughts array
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: dbThoughtData._id } },
          { new: true }
        );
      })
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

  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .sort({ createdAt: -1 }) // Sort in descending order based on createdAt timestamp
      .populate({
        path: 'reactions',
        select: '-__v', // Exclude the "__v" field from the populated reactions
      })
      .select('-__v') // Exclude the "__v" field from the returned thoughts
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Get a single thought by ID
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.thoughtId })
      .populate({
        path: 'reactions',
        select: '-__v', // Exclude the "__v" field from the populated reactions
      })
      .select('-__v') // Exclude the "__v" field from the returned thought
      .then((dbThoughtData) => {
        // If no thought found, send 404 status and error message
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  

  // Update a thought by ID
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      body,
      { new: true, runValidators: true }
    )
      .then((dbThoughtData) => {
        // If no thought found, send 404 status and error message
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Delete a thought by ID
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then((dbThoughtData) => {
        // If no thought found, send 404 status and error message
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        // Remove the thought ID from the associated user's thoughts array
        return User.findOneAndUpdate(
          { username: dbThoughtData.username },
          { $pull: { thoughts: params.thoughtId } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        // If no user found, send 404 status and error message
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this thought!' });
          return;
        }
        res.json({ message: 'Thought and its associated user data deleted successfully!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Create a reaction for a thought
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then((dbThoughtData) => {
        // If no thought found, send 404 status and error message
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Delete a reaction from a thought
  deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then((dbThoughtData) => {
        // If no thought found, send 404 status and error message
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = thoughtController;
