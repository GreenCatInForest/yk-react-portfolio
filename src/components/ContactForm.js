export const ContactForm = () => {
  return (
    <div>
      <form action="" method="get">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required />

        <label for="company">Company</label>
        <input type="text" name="company" id="company" />

        <label for="mail">E-mail</label>
        <input type="email" name="email" id="email" />

        <label for="tel">Phone</label>
        <input type="tel" name="tel" id="tel" />

        <label for="message">Your message</label>
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
