import "./FrontPage.css";
import styled from "styled-components";

const Page = styled.div`
  background-color: black;
  width: 100%;
  height: 112vh;
  margin-top: 2vh;
`;

function FrontPage() {
  return (
    <Page>
      <div className="avatar">
        <div className="ZoneISS">
          <img
            src="/photos/iss2.png"
            id="iss"
            className="TriangleHaut"
            alt="ISS"
          />{" "}
          <div className="containerTextISS">
            <div className="textISS">ISS</div>
          </div>
        </div>

        <div className="ZoneRover">
          <img
            src="/photos/rover.jpg"
            id="rover"
            className="TriangleDroit"
            alt="rover"
          />

          <div className="containerTextRover">
            <div className="textRover">Rover</div>
          </div>
        </div>

        <div className="ZoneGalerie">
          <img
            src="/photos/galerie.jpg"
            className="TriangleGauche"
            id="galerie"
            alt="galerie"
          />

          <div className="containerTextGalerie">
            <div className="textGalerie">Galerie</div>
          </div>
        </div>
      </div>

      <svg>
        <defs>
          <clipPath id="issPhoto" clipPathUnits="objectBoundingBox">
            <polygon points="0.99,0 .5,0.99 0.001,0" />
          </clipPath>
          <clipPath id="roverPhoto" clipPathUnits="objectBoundingBox">
            <polygon points="1,0 1,1 .5,1" />
          </clipPath>
          <clipPath id="galeriePhoto" clipPathUnits="objectBoundingBox">
            <polygon points=".49,1 0,1 0,0" />
          </clipPath>
        </defs>
      </svg>
    </Page>
  );
}

export default FrontPage;
