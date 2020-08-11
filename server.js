const express = require("express");
const connectDB = require('./config/db');
// const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
// Connect Database
connectDB();
// Init Middleware
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

//define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/generatepage", require("./routes/api/generatepage"));

app.get("/", (req, res) => res.send("Api Running"));

// Replaced
// app.get("/", (req, res) => {
//   user.find((err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
