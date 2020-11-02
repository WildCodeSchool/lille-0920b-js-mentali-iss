import "./reset.css";
import "./App.css";
import FrontPage from "./components/FrontPage";
import ViewISS from './components/ViewISS';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CrewCards from "./components/CrewCards";

function App() {
  return (
    <div className="page-container">
      <Header />
      <CrewCards />
      <Footer />
    </div>
  );
}

export default App;
