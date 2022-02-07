import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"

const cardElements = data.map(card => {
  return (<Card
  key={card.id}
  {...card}
  />)
})

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-container">
        {cardElements}
      </section>
      
    </div>
  );
}

export default App;
