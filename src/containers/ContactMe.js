import { ContactForm } from "../components/ContactForm";
import { RatingForm } from "../components/RatingForm";

import phoneIconLight from "../assets/images/icons8-phone-light.png";
import phoneIconDark from "../assets/images/icons8-phone-dark.png";

import mailIconLight from "../assets/images/icons8-email-light.png";
import mailIconDark from "../assets/images/icons8-email-dark.png";

export const ContactMe = ({ darkMode }) => {
  return (
    <div id="contact" className="containerContactMe">
      <h3 className="componentTitle">Let's work together!</h3>
      <button className="btn-orange">Get In Touch</button>
      <ContactForm />

      <div className="contactMeFeatures">
        <div className="contactDirectly">
          <h3 className="componentTitle">Contact me directly:</h3>
          {!darkMode ? (
            <ul>
              <li>
                <img src={phoneIconLight} alt="Dark Mode Phone Icon" />
                <p>07827643593</p>
              </li>
              <li>
                <img src={mailIconLight} alt="Dark Mode Mail Icon" />
                <p>mail address</p>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <img src={phoneIconDark} alt="Light Mode Phone Icon" />
                <p>07827643593</p>
              </li>
              <li>
                <img src={mailIconDark} alt="Light Mode Mail Icon" />
                <p>mail address</p>
              </li>
            </ul>
          )}
        </div>
        <RatingForm />
      </div>
    </div>
  );
};
