const express = require("express");
const bodyParser = require("body-parser");
const bfhlRoutes = require("./routes/bfhl"); // Import your routes

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies

// Routes
app.use("/bfhl", bfhlRoutes);

// Error Handling Middleware (add later for a production app)
// ...

module.exports = app;
