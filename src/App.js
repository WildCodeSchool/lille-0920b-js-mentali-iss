import './reset.css';
import styled from 'styled-components';
import Header from './components/Header';
import stars2 from './assets/stars2.jpg';
// import FrontPage from "./components/FrontPage";
import MyCarousel from './components/CarouselMap';
import ViewISS from './components/ViewISS';
import Footer from './components/Footer';
import InSpace from './components/InSpace';
import PassageIss from './components/PassageIss';

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

      <PassageIss />

      <Footer />
    </Pagecontainer>
  );
}

export default App;
