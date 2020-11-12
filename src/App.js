import "./reset.css";
import styled from "styled-components";
import Header from "./components/Header";
import MyCarousel from "./components/CarouselMap";
import ViewISS from "./components/ViewISS";
import InSpace from "./components/InSpace";
import Footer from "./components/Footer";


const Pagecontainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: black;
  width: 100vw;
  height: auto;
`;

function App() {
  return (
    <Pagecontainer>
      <Header />
      <MyCarousel />
      <ViewISS />
      <InSpace />
      <Footer />
    </Pagecontainer>
  );
}

export default App;
