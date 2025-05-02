

// export default function News() {
//   return (
//     <main style={{ padding: '2rem' }}>
//       <h2>News & Updates</h2>
//       <p>
//         Stay up-to-date with the latest news and updates on the pet importation process, including changes in regulations, new resources, and upcoming events.
//       </p>
//       <h3>Latest News</h3>
//       <div>
//         <h4>New Guidelines for Pet Travel to Australia</h4>
//         <p>The Australian government has updated its guidelines for pet travel, including new quarantine requirements and health certification standards.</p>
//         <p><strong>Date:</strong> May 1, 2025</p>
//         <a href="#">Read more</a>
//       </div>
//       <div>
//         <h4>Upcoming Changes to Import Fees</h4>
//         <p>The Australian government is planning to introduce new import fees for pets. This update will impact the cost of bringing your pet to Australia.</p>
//         <p><strong>Date:</strong> April 25, 2025</p>
//         <a href="#">Read more</a>
//       </div>
//     </main>
//   )
// }

import React, { useEffect, useState } from 'react';
import { client } from '../../sanity';
// import { PortableText } from '@portabletext/react';

export default function News() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "news"] | order(publishedAt desc)`)
      .then((data) => {
        console.log("Fetched data:", data);
        setNews(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message || 'Unknown error');
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>News</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {news.length === 0 ? (
        <p>No news found or loading...</p>
      ) : (
        news.map((item) => (
          <div key={item._id} style={{ marginBottom: '2rem' }}>
            <h2>{item.title}</h2>
            <p style={{ color: 'gray' }}>
              {new Date(item.publishedAt).toLocaleDateString()}
            </p>
            {/* <PortableText value={item.body} /> */}
            <p>{item.body ? 'Body exists' : 'No body'}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}