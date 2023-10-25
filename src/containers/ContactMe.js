import { ContactForm } from "../components/ContactForm";
import { RatingForm } from "../components/RatingForm";

export const ContactMe = () => {
  return (
    <div id="contact" className="containerContactMe">
      <h2 className="containerTitleH2">Contact Me!</h2>
      <h3 className="text-4xl font-bold">Let's work together!</h3>
      <button className="btn-orange">Get In Touch</button>
      <ContactForm />

      <div className="contactMeFeatures">
        <div className="contactDirectly">
          <h3>Contact me directly:</h3>
          <img alt="icon phone"></img>
          <p>phone number</p>
          <img alt="icon mail"></img>
          <p>mail address</p>
        </div>

        <div className="ratePortfolio">
          <RatingForm />
        </div>
      </div>
    </div>
  );
};
