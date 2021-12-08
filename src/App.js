import './App.css';
import Jumbotron from "./components/Jumbotron.js"
import Navbar from "./components/Navbar.js"
import InfoBoxTop from "./components/InfoBoxTop.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Navbar />
      <InfoBoxTop />
      <Footer />
    </div>
  );
}

export default App;
