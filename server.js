const express = require("express");
const app = express();
const port = 3000;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Route for the home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

// Route for the about page
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

// 404 Middleware
app.use((req, res, next) => {
  res.status(404).send("Sorry, we couldn't find that!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
