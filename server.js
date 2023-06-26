const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


/*
- "controller" folder (include: thoughtController, userController )
- "models" folder (include: index.js, thought.js and user.js)
- "routes" folder (include: index.js, "api" folder (include: userRoutes, thoughtRoutes, index.js))
- server.js
- .gitignore */