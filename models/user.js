const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define the user schema
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true // Remove whitespace from the beginning and end of the string
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+\@.+\..+/, 'Please enter a valid email address'] // Use a regex pattern to validate the email format
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought' // Reference the Thought model for the thoughts field
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User' // Self-reference to the User model for the friends field
        }]
    },
  {
    toJSON: {
        virtuals: true, // Include virtual fields when converting to JSON
        getters: true // Include getters when converting to JSON
    },
    id: false // Disable the "_id" field in the document
  }
);

// Define a virtual field to calculate the number of friends
userSchema.virtual('friendCount')
    .get(function () {
    return this.friends.length;
});

// Create the User model using the user schema
const User = mongoose.model('User', userSchema);

module.exports = User;

