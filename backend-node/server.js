const express = require("express");

const app = express();

app.use(express.json());

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Form submission successful!");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
