const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = (req, res) => {
  if (req.method === "POST") {
    const dataSent = req.body;
    const msg = {
      to: "yanakozarenko2022@gmail.com",
      from: "yanaportfoliofullstack@gmail.com",
      subject: "New message from portfolio contact form",
      text: `
      Name: ${dataSent.contactName}
      Company: ${dataSent.contactCompany}
      Email: ${dataSent.contactEmail}
      Tel: ${dataSent.contactTel}
      Subject: ${dataSent.contactSubject}
      Message: ${dataSent.contactMessage}`,
      html: `
      <strong>Name:</strong> ${dataSent.contactName}
      <strong>Company:</strong> ${dataSent.contactCompany}
      <strong>Email:</strong> ${dataSent.contactEmail}
      Tel: ${dataSent.contactTel}
      <strong>Subject:</strong> ${dataSent.contactSubject}
      <strong>Message:</strong> ${dataSent.contactMessage}`,
    };
    sgMail
      .send(msg)
      .then(() => {
        res.status(200).json({ message: "Email sent" });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Error sending email", error: error });
      });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
