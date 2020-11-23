import "./reset.css";
import styled from "styled-components";
import MyCarousel from "./components/CarouselMap";
import ViewISS from "./components/ViewISS";
import AstroList from "./components/AstroList";

const size = {
  xs: '320px',
  sm: '768px',
  lg: '1200px',
 };

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
 };

const Pagecontainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: black;
  width: 100vw;
  height: auto;
`;

const CardsContainer= styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    box-sizing:border-box;
    padding-right: 150px;
    @media ${device.xs} {
      align-items: end;
      width: 100%;}
  `;

function App() {
  return (
    <Pagecontainer>
      <MyCarousel />
      <ViewISS />
      <CardsContainer>
        <AstroList />
      </CardsContainer>
    </Pagecontainer>
  );
}

export default App;
