import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Input from "./components/Input";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Advanced from "./components/Advanced";

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
      <div>
        <Advanced />
      </div>
      <div>
        <Faq />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
