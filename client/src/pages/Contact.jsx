export default function Contact() {
  return (
    <main style={{ padding: '2rem' }}>
      <h2>Contact Us</h2>
      <p>
        We would love to hear from you! If you have any questions or need assistance with importing your pet into Australia, please get in touch using the form below.
      </p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </main>
  )
}