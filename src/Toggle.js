import React, { useState } from "react";
import Navbar from "./Navbar"; // Replace with the actual path to your Navbar component
import Hero from "./Hero"; // Replace with the actual path to your Hero component

const App = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  const toggleButtons = () => {
    setShowSignUp((prev) => !prev);
  };

  return (
    <div>
      <Navbar toggleButtons={toggleButtons} />
      <Hero showSignUp={showSignUp} />
    </div>
  );
};

export default App;
