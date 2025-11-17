import React from "react";

const places = [
  {
    city: "Kyoto",
    country: "Japan",
    region: "Asia",
    mainAttraction: "Fushimi Inari Shrine & Arashiyama Bamboo Grove",
    why: "I want to experience traditional Japanese culture, stroll through temples, and see the seasonal contrasts — especially cherry blossoms and autumn leaves."
  },
  {
    city: "Reykjavík / Iceland",
    country: "Iceland",
    region: "Europe",
    mainAttraction: "Northern Lights & Golden Circle",
    why: "I want to see the aurora borealis and dramatic volcanic landscapes that look like another planet."
  },
  {
    city: "Cusco / Machu Picchu",
    country: "Peru",
    region: "South America",
    mainAttraction: "Machu Picchu",
    why: "To hike ancient Incan trails, learn Andean history, and witness breathtaking mountain ruins."
  },
  {
    city: "Cape Town",
    country: "South Africa",
    region: "Africa",
    mainAttraction: "Table Mountain & Cape Peninsula",
    why: "I want a mix of beaches, dramatic cliffs, wildlife nearby, and vibrant local culture."
  }
];

export default function Destinations() {
  return (
    <section className="destinations card">
      <h2>Dream Destinations</h2>
      <div className="grid">
        {places.map((p, i) => (
          <article className="place" key={i}>
            <h3>{p.city} — {p.country}</h3>
            <p className="meta">{p.region} • {p.mainAttraction}</p>
            <p>{p.why}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
