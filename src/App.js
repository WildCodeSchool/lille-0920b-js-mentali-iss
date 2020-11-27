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

const size = {
  xs: "320px",
  sm: "768px",
  lg: "1200px",
};
const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
};
const OutaContainer = styled.div`
  height: 100%;
  box-sizing: border-box;
  margin-top: 10vh;
  padding: 0;
  background-color: black;
  overflow: hidden;
  @media ${device.xs} {
    margin-top: 0;
  }
`;

const PageWrap = styled.div`
  text-align: center;
  overflow: hidden;
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
      </PageWrap>
      <Footer />
    </OutaContainer>
  );
}

export default App;
