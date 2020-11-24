import "./reset.css";
import styled from "styled-components";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import Footer from "./components/Footer";
import GaleriePage from "./components/GaleriePage";
import PageContact from "./components/PageContact";

const OutaContainer = styled.div`
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
        <FrontPage />
        <Footer />
      </PageWrap>
    </OutaContainer>
  );
}

export default App;
