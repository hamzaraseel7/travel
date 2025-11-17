import React from "react";

const goals = [
  "Visit all 7 continents (Antarctica is optional but tempting)",
  "Try signature dishes in at least 10 different countries",
  "Learn basic conversational phrases in 5 languages",
  "Document each trip with a short travel journal and photos"
];

export default function Goals() {
  return (
    <section className="goals card">
      <h2>Travel Goals</h2>
      <ul>
        {goals.map((g, i) => <li key={i}>{g}</li>)}
      </ul>
    </section>
  );
}
