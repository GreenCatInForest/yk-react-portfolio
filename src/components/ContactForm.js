export const ContactForm = () => {
  return (
    <div>
      <form action="" method="get">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />

        <label htmlFor="company">Company</label>
        <input type="text" name="company" id="company" />

        <label htmlFor="mail">E-mail</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="tel">Phone</label>
        <input type="tel" name="tel" id="tel" />

        <label htmlFor="subject">Choose a subject:</label>
        <select id="subject" name="subject">
          <option value="hire">Hire</option>
          <option value="watch">Watch my portfolio</option>
          <option value="freelance">Freelance project</option>
          <option value="freelance">Ask me to volunteer</option>
          <option value="other">Something else</option>
        </select>

        <label htmlFor="message">Your message</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          cols="50"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
