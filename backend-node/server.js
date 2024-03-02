const express = require("express");
const sendEmail = require("./sendEmail");

const app = express();
const path = require("path");

app.use(express.json());
app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.url}`,
    req.body
  );
  next();
});

app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.post("/submit", async (req, res) => {
  console.log(new Date().toISOString(), "POST /submit", req.body);
  try {
    const result = await sendEmail(req.body);
    console.log("Email sent:", result);
    res.json({ message: "Email sent", result: result });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email", error: error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
