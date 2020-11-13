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

const CardsContainer= styled.div `
      border: solid 2px blue;
      display: flex;
      flex-direction: column;
      justify-content: center;
      `;

function App() {
  return (
    <Pagecontainer>
      <Header />
      <MyCarousel />
      <ViewISS />
      <CardsContainer>
        <InSpace />
      </CardsContainer>
      <Footer />
    </Pagecontainer>
  );
}

export default App;
