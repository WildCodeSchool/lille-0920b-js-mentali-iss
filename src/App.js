import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PassageIss from "./components/PassageIss";
import "./reset.css";

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
        <PassageIss />
        <Footer />
      </PageWrap>
    </OutaContainer>
  );
}

export default App;
