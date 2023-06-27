# Social Network API

This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. The API is built using Express.js for routing, MongoDB as the database, and Mongoose as the ODM (Object Data Modeling) library.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [Contributing](#contributing)

***

## User Story

As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.


## Acceptance Criteria

- The server should start and the Mongoose models should be synced to the MongoDB database.
- The API should provide GET routes to retrieve data for users and thoughts in a formatted JSON.
- The API should support POST, PUT, and DELETE routes to create, update, and delete users and thoughts in the database.
- The API should support POST and DELETE routes to create and delete reactions to thoughts, and add and remove friends from a user's friend list.

[🔼back to table of contents ](#table-of-contents)


## Installation

To run the Social Network API locally, you need to have the following installed:

- Node.js
- MongoDB
- express
- moment
- mongoose

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project in your terminal.
3. Run the following command to install the required dependencies: `npm init` and `npm install`
4. Run `npm install express`,  `npm install mongoose` and  `npm install moment --save-prod` to have express, mangoose and moment dependencies installed.
5. Configure the MongoDB connection by updating the `config/connection.js` file with your MongoDB URI or keeping the default settings for a local MongoDB instance.
6. Start the application by running the following command: `npm start`

[🔼back to table of contents ](#table-of-contents)


## Usage

Once the application is running, you can use a tool like [Insomnia](https://insomnia.rest/) to test the API endpoints.

The available endpoints are:

- **GET /api/users**: Retrieves all users.
- **GET /api/users/:userId**: Retrieves a specific user by ID.
- **POST /api/users**: Creates a new user.
- **PUT /api/users/:userId**: Updates a user.
- **DELETE /api/users/:userId**: Deletes a user.
- **GET /api/thoughts**: Retrieves all thoughts.
- **GET /api/thoughts/:thoughtId**: Retrieves a specific thought by ID.
- **POST /api/thoughts/:userId**: Creates a new thought.
- **PUT /api/thoughts/:thoughtId**: Updates a thought.
- **DELETE /api/thoughts/:thoughtId**: Deletes a thought.
- **POST /api/thoughts/:thoughtId/reactions**: Creates a reaction to a thought.
- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId**: Deletes a reaction from a thought.
- **POST /api/users/:userId/friends/:friendId**: Adds a friend to a user's friend list.
- **DELETE /api/users/:userId/friends/:friendId**: Removes a friend from a user's friend list.

Refer to the API documentation or walkthrough video for more details on how to use these endpoints.

[🔼back to table of contents ](#table-of-contents)


## Walkthrough Video

Please refer to the walkthrough video 


to see functionality of the application for **Users API**, please click on the icon below:
[![play image](https://user-images.githubusercontent.com/124220654/232980789-98efdcfd-579f-4389-a10f-8822b54bbeaa.jpg)](https://clipchamp.com/watch/ZHBKYxZ6b2j)

to see functionality of the application for **Thoughts API**, please click on the icon below:
[![play image](https://user-images.githubusercontent.com/124220654/232980789-98efdcfd-579f-4389-a10f-8822b54bbeaa.jpg)](https://clipchamp.com/watch/tjQTRwx2Suy)

to see functionality of the application for **Reactions API**, please click on the icon below:
[![play image](https://user-images.githubusercontent.com/124220654/232980789-98efdcfd-579f-4389-a10f-8822b54bbeaa.jpg)](https://clipchamp.com/watch/uKJlAx5o3gD)


[🔼back to table of contents ](#table-of-contents)


## Contributing

Contributions to the Social Network API are welcome! If you have any improvements or bug fixes, feel free to submit a pull request.

[🔼back to table of contents ](#table-of-contents)





