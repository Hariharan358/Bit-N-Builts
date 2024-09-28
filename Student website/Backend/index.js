const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Dummy user data
const users = [
  { username: "user1", password: "password1", walletid: "wallet1" },
  { username: "user2", password: "password2", walletid: "wallet2" }
];

app.post("/api/login", (req, res) => {
  const { username, password, walletid } = req.body;
  console.log("Received login attempt:", req.body); // Log the incoming data
  const user = users.find(
    (user) => user.username === username && user.password === password && user.walletid === walletid
  );

  if (user) {
    res.status(200).json({ message: "Login successful", user });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});