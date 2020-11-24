import "./reset.css";
import styled from "styled-components";
import Header from "./components/Header";
import CarouselMap from "./components/CarouselMap";
import ViewISS from "./components/ViewISS";
import AstroList from "./components/AstroList"
import Footer from './components/Footer'

const OutaContainer = styled.div`
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: black;
`;

const PageWrap = styled.div`
  text-align: center;
  overflow: auto;
  top: 45%;
  position: relative;
`;

function App() {
  return (
    <OutaContainer>
      <Header /> 
      <PageWrap>
        <CarouselMap />
        <ViewISS />
        <AstroList />
        <Footer />
      </PageWrap>
    </OutaContainer>
  );
}

export default App;
