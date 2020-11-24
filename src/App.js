import "./reset.css";
import styled from "styled-components";
import CarouselMap from "./components/CarouselMap";
import ViewISS from "./components/ViewISS";
import AstroList from "./components/AstroList";

const OutaContainer = styled.div`
    height:100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: ivory`;

const PageWrap = styled.div`
  text-align: center;
    overflow: auto;
    top: 45%;
    position: relative`;

function App() {
  return (
    <OutaContainer>
      <PageWrap>
        <CarouselMap /> 
        <ViewISS />
        <AstroList />
      </PageWrap>
      
    </OutaContainer>
  );
};

export default App;
