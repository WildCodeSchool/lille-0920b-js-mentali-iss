import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import Footer from "./components/Footer";

function App() {
  return (
    <body>
      <div id="outer-container">
        <Header />
          <div id="page-wrap">
          <FrontPage />
          <Footer />
          </div>
      </div>
    </body>
  );
}

export default App;
