import { ContactForm } from "../components/ContactForm";
import { RatingForm } from "../components/RatingForm";

export const ContactMe = () => {
  return (
    <div
      id="contact"
      className="flex flex-col text-center items-center gap-10 sm:gap-12"
    >
      <h2 className="containerTitleH2">Contact Me!</h2>
      <h3 className="text-4xl font-bold">Let's work together!</h3>
      <button className="btn-orange">Get In Touch</button>
      <ContactForm />
      <h3>Contact me directly:</h3>
      <img alt="icon phone"></img>
      <p>phone number</p>
      <img alt="icon mail"></img>
      <p>mail address</p>
      <h3>Rate my portfolio:</h3>
      <RatingForm />
    </div>
  );
};
