const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
require('dotenv').config()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Routes
app.use("/api", apiRoutes);

// route to direcet to the swag shop -- not currnetly working :(
// app.get("/swag", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/public/swag.html"));
// });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port http://localhost:${PORT}  `);
});
