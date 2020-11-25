import "./reset.css";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import Footer from "./components/Footer";
import GaleriePage from "./components/GaleriePage";
import RoverPage from "./components/RoverPage";
import PageContact from "./components/PageContact";
import ViewISS from "./components/ViewISS";
import PassageIss from "./components/PassageIss";

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
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/roveronmars" component={RoverPage} />
          <Route path="/gallery" component={GaleriePage} />
          <Route path="/contact" component={PageContact} />
          <Route path="/viewiss" component={ViewISS} />
          <Route path="/passageiss" component={PassageIss} />
        </Switch>
        <Footer />
      </PageWrap>
    </OutaContainer>
  );
}

export default App;
