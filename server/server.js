const express = require("express");
// const mongoose = require("mongoose");
const routes = require("../routes");
const app = express();
const PORT = process.env.PORT || 3001;
//mongodb mongoose models
const db = require("./models");

const passport = require("../config/passport");

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//TODO - add middleware authentication - either passport or basic-express-auth, etc.

// Add routes, both API and view
app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/MoneyVestor",
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true
//   }
// );

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);