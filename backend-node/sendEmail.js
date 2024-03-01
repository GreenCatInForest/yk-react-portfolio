const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const transporter = nodemailer.createTransport({
  service: "proton.me",
  auth: {
    user: "yana-portfolio@proton.me",
    pass: "00000000",
  },
});

const sendEmail = async (contactData) => {
  const message = {
    from: "yana-portfolio@proton.me",
    to: "yanaportfoliofullstack@gmail.com",
    subject: "New Form Submission",
    text: JSON.stringify(contactData),
  };

  try {
    await transporter.sendMail(message);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
