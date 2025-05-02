import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <main className="home-container">
      <section className="intro">
        <h1>Welcome to the Pet Importation Community</h1>
        <p>
          We are here to guide you through the process of bringing your pets to Australia.
          Whether you're preparing for travel or looking for resources, you're in the right place.
        </p>
      </section>

      <section className="section">
        <h2>Why Choose Us?</h2>
        <p>
          Our community offers expert advice, resources, and support for every step of the pet importation process.
          From understanding import regulations to finding the right services, we’ve got you covered.
        </p>
      </section>

      <section className="section">
        <h2>How It Works</h2>
        <p>
          Get started by browsing through our guides, joining events, and connecting with other pet owners.
          Our platform makes it easy to stay informed and make your pet's transition to Australia smooth.
        </p>
      </section>

      <section className="cta-section">
        <h2>Join Our Community</h2>
        <p>
          Don’t navigate the pet importation process alone! Become part of our supportive community where you can ask questions, share experiences, and find advice.
        </p>
        <a href="/requestToJoin" className="cta-button">Join Now</a>
      </section>
    </main>
  );
};

export default Home;