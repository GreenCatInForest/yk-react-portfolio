export const ContactForm = () => {
  return (
    <div>
      <form
        action=""
        method="get"
        className="flex flex-col text-center items-center gap-3 rows-4 cols-40 border-2 p-8"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="border-2 border-orange-600"
        />

        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          className="border-2 border-orange-600"
        />

        <label htmlFor="mail">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-2 border-orange-600"
        />

        <label htmlFor="tel">Phone</label>
        <input
          type="tel"
          name="tel"
          id="tel"
          className="border-2 border-orange-600"
        />

        <label htmlFor="subject">Choose a subject:</label>
        <select
          id="subject"
          name="subject"
          className="border-2 border-orange-600"
        >
          <option value="hire">Hire</option>
          <option value="watch">Watch my portfolio</option>
          <option value="freelance">Freelance project</option>
          <option value="freelance">Ask me to volunteer</option>
          <option value="other">Something else</option>
        </select>

        <label htmlFor="message">Your message</label>
        <textarea
          className="border-2 border-orange-600"
          name="message"
          id="message"
          rows="4"
          cols="40"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-400 text-white border border-orange-700 w-40 h-10 rounded-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
