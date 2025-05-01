export default function Newsletter() {
  return (
    <main style={{ padding: '2rem' }}>
      <h2>Subscribe to Our Newsletter</h2>
      <p>
        Stay up-to-date with the latest news, insights, and updates on the pet importation process by subscribing to our newsletter.
      </p>
      <form>
        <div>
          <label htmlFor="email">Enter your email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Subscribe</button>
      </form>
      <p>
        By subscribing, you agree to receive updates and information regarding the pet importation process and related events.
      </p>
    </main>
  )
}