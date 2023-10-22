import { ContactForm } from "../components/ContactForm";

export const ContactMe = () => {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <h3>Let's work together!</h3>
      <button>Get In Touch</button>
      <ContactForm />
      <h3>Contact me directly:</h3>
      <img alt="icon phone"></img>
      <p>phone number</p>
      <img alt="icon mail"></img>
      <p>mail address</p>
    </div>
  );
};
