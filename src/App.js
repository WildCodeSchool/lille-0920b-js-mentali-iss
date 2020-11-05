import "./reset.css";
import "./App.css";
import FrontPage from "./components/FrontPage";
import ViewISS from "./components/ViewISS";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyCarousel from "./components/CarouselMap";

function App() {
  return (
    <div className="page-container">
      <Header />
      <MyCarousel />
      <ViewISS />
      <Footer />
    </div>
  );
}

export default App;
