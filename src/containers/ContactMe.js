import { ContactForm } from "../components/ContactForm";
import { RatingForm } from "../components/RatingForm";

export const ContactMe = () => {
  return (
    <div
      id="contact"
      className="flex flex-col text-center items-center gap-10 sm:gap-12"
    >
      <h2 className="shadow-xl py-2 px-60 text-lg  font-medium">Contact Me!</h2>
      <h3 className="text-4xl font-bold">Let's work together!</h3>
      <button className="bg-orange-600 hover:bg-orange-400 text-white border border-orange-700 w-40 h-10 rounded-full">
        Get In Touch
      </button>
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
