import "./reset.css";
import "./App.css";
import FrontPage from "./components/FrontPage";
//import ViewISS from './components/ViewISS';
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="page-container">
      <Header />
      <div id="content">
        <FrontPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
