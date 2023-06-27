/*
const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkDB' || 'mongodb://localhost/social-network-api';

  connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

module.exports = connection;

const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB' || 'mongodb://localhost/social-network-api';

*/
/*
  const mongoose = require("mongoose");

  mongoose.connect("mongodb://localhost:27017/social-network-api");
  
  module.exports = mongoose.connection;

 */


  const { connect, connection } = require('mongoose');

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-api';

connect(connectionString);

module.exports = connection;