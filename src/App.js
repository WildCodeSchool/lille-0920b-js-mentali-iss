import "./reset.css";
import "./App.css";
import FrontPage from "./components/FrontPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      <Header />
      <FrontPage />
      <Footer />
    </div>
  );
}

export default App;
