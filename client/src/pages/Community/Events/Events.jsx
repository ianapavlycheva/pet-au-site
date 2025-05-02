import Upcoming from './Upcoming';
import Past from './Past';

export default function Events() {
  return (
    <main style={{ padding: '2rem' }}>
      <h2>Events</h2>
      <p>Check out our upcoming and past events related to pet importation and care:</p>

      <section>
        <h3>Upcoming Events</h3>
        <Upcoming />
      </section>

      <section>
        <h3>Past Events</h3>
        <Past />
      </section>
    </main>
  );
}