// const sgMail = require("@sendgrid/mail");

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const msg = {
//   to: "yanakozarenko2022@gmail.com", // Change to your recipient
//   from: "yanaportfoliofullstack@gmail.com", // Change to your verified sender
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "yahoo",
//   auth: {
//     user: "yanafullstackportfolio@yahoo.com",
//     pass: "a120412x",
//   },
// });

// const sendEmail = async (contactData1) => {
//   try {
//     const mailOptions = {
//       from: "<yanafullstackportfolio@yahoo.com>",
//       to: "yanafullstackportfolio@yahoo.com",
//       subject: "New Form Submission",
//       text: `
//         New form submission:
//         Name: ${contactData1.contactName}
//         Email: ${contactData1.contactEmail}
//         Message: ${contactData1.contactMessage} ${contactData1}`,
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent:", info.messageId);
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };

// // Example usage: call sendEmail with form data
// let contactData1 = {
//   contactName: "John Doe",
//   contactEmail: "john@example.com",
//   contactMessage: "This is a test message",
// };
// sendEmail(contactData1);

// module.exports = sendEmail;
