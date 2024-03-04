import Hero from "./Hero";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="hero">
        <Hero />
      </div>
    </div>
  );
}

export default App;
