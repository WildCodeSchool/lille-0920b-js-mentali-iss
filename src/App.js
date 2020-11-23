
import styled from 'styled-components';
import Header from './components/Header';
import stars2 from './assets/stars2.jpg';
// import FrontPage from "./components/FrontPage";
import MyCarousel from './components/CarouselMap';
import Footer from './components/Footer';
import InSpace from './components/InSpace';

import PassageIss from './components/PassageIss';


import "./reset.css";


import FrontPage from "./components/FrontPage";

import GaleriePage from "./components/GaleriePage";


const OutaContainer = styled.div`
    height:100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;`;

const PageWrap = styled.div`
  text-align: center;
    overflow: auto;
    top: 45%;
    position: relative`;

function App() {
  return (
    <OutaContainer>
      <Header />
      <PageWrap>
      <PassageIss />
        <Footer />
      </PageWrap>
    </OutaContainer>
  );
};

export default App;
