import Faq from "./Faq";
import Footer from "./Footer";
import FooterTwo from "./FooterTwo";
import Header from "./Header";
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
      <div className="header">
        <Header />
      </div>
      <div className="faq">
        <Faq />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <div className="footertwo">
        <FooterTwo />
      </div>
    </div>
  );
}

export default App;
