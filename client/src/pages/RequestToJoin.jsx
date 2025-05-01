export default function RequestToJoin() {
  return (
    <main style={{ padding: '2rem' }}>
      <h2>Request to Join</h2>
      <p>
        If you're interested in joining our community and accessing resources for the pet importation process, please fill out the form below to submit your request.
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
          <label htmlFor="reason">Why do you want to join?</label>
          <textarea id="reason" name="reason" rows="4" required></textarea>
        </div>
        <button type="submit">Submit Request</button>
      </form>
    </main>
  )
}