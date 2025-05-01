export default function Volunteer() {
  return (
    <main style={{ padding: '2rem' }}>
      <h2>Volunteer / Get Involved</h2>
      <p>
        We’re always looking for passionate individuals who are eager to help others through the pet importation process. If you’re interested in volunteering and making a difference, fill out the form below.
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
          <label htmlFor="skills">What skills do you have to contribute?</label>
          <textarea id="skills" name="skills" rows="4" required></textarea>
        </div>
        <button type="submit">Submit Volunteer Application</button>
      </form>
      <p>
        Thank you for considering helping our community! We look forward to hearing from you.
      </p>
    </main>
  )
}