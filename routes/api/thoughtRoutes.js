const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// Route for getting all thoughts
router.get('/', getAllThoughts);

// Route for getting a thought by ID
router.get('/:thoughtId', getThoughtById);

// Route for creating a new thought
router.post('/', createThought);

// Route for updating a thought by ID
router.put('/:thoughtId', updateThought);

// Route for deleting a thought by ID
router.delete('/:thoughtId', deleteThought);

// Route for adding a reaction to a thought
router.post('/:thoughtId/reactions', addReaction);

// Route for deleting a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;
