const express = require("express");
const connectDB = require('./config/db');
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

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/generatepage", require("./routes/api/generatepage"));

app.get("/", (req, res) => res.send("Api Running"));

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
