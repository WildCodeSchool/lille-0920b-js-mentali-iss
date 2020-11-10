import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GaleriePage from "./components/GaleriePage";

function App() {
  return (
    <div className="page-container">
      <Header />
      <div id="content">
        <GaleriePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
