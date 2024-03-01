const express = require("express");
const app = express();
const path = require("path");

app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.url}`,
    req.body
  );
  next();
});

app.use(express.static(path.join(__dirname, "../build")));
app.use(express.json());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Form submission successful!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
