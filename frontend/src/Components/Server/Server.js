const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

const SECRET_KEY = "your_secret_key";

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if ((email === "admin@example.com" && password === "adminpassword") || (email === "employee@example.com" && password === "employeepassword")) {
    const user = { email };
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });

    return res.json({ token });
  }

  res.status(401).json({ error: "Email atau password salah" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
