const express = require("express");

require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

const sendEmail = (dataSent) => {
  const msg = {
    to: "yanakozarenko2022@gmail.com", // Change to your recipient
    from: "yanaportfoliofullstack@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: `and easy to do anywhere, even with Node.js ${dataSent}`,
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.post("/submit", async (req, res) => {
  console.log(new Date().toISOString(), "POST /submit", req.body);
  const dataSent = req.body;
  try {
    await sendEmail(dataSent);
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email", error: error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
