import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
}

export default App;
