import "./reset.css";
import styled from "styled-components";
import MyCarousel from "./components/CarouselMap";
import ViewISS from "./components/ViewISS";
import AstroList from "./components/AstroList";

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
      <MyCarousel />
      <ViewISS />
      <AstroList />
    </Pagecontainer>
  );
}

export default App;
