import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Goals from "./components/Goals";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <About />
        <Destinations />
        <Goals />
      </main>
      <footer className="footer">
        Built with ❤️ using React + Vite — Project for assessment
      </footer>
    </div>
  );
}
