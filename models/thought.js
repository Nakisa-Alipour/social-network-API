const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require('moment');


//Define the reaction subdocument schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: mongoose.Schema.Types.ObjectId,
            //type: Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId() // Generate a new ObjectId as the default value
            //default: ()=> new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            maxlength: 280 // Set maximum character length for reaction body
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //get: timestamp => dateFormat(timestamp) // Use a getter method to format the timestamp on query
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        }
    },
  {
    toJSON: {
        getters: true // Include getters when converting to JSON
    },
  }
);

// Define the thought schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1, // Set minimum character length for thought text
            maxlength: 280 // Set maximum character length for thought text
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //get: timestamp => dateFormat(timestamp) // Use a getter method to format the timestamp on query
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true
            },
        reactions: [reactionSchema] // Embed the reaction subdocuments within the thought document as an array
    },
  {
    toJSON: {
        virtuals: true, // Include virtual fields when converting to JSON
        getters: true // Include getters when converting to JSON
    },
    id: false // Disable the "_id" field in the document
  }
);

// Define a virtual field to calculate the number of reactions
thoughtSchema.virtual('reactionCount')
    .get(function () {
    return this.reactions.length;
});

// Create the Thought model using the thought schema
const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;

