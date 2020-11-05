import "./FrontPage.css";
import styled from "styled-components";

const TriangleHaut = styled.div`
  clip-path: url(#issPhoto);
  opacity: 1;
  display: block;
  transition: 0.5s ease;
`;

const TriangleDroit = styled.div`
  clip-path: url(#roverPhoto);
  opacity: 1;
  display: block;
  transition: 0.5s ease;
`;

function FrontPage() {
  return (
    <div className="Page">
      <div className="avatar">
        <div className="ZoneISS">
          <TriangleHaut>
            <img
              src="/photos/iss2.png"
              className="TriangleHaut"
              id="iss"
              alt="ISS"
            />
          </TriangleHaut>
          <div className="containerTextISS">
            <div className="textIss">ISS</div>
          </div>
        </div>

        <div className="ZoneRover">
          <TriangleDroit>
            <img src="/photos/rover.jpg" id="rover" alt="rover" />
          </TriangleDroit>

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
            <polygon points="0.99,0 .5,1 0.001,0" />
          </clipPath>
          <clipPath id="roverPhoto" clipPathUnits="objectBoundingBox">
            <polygon points="1,0 1,1 .51,1" />
          </clipPath>
          <clipPath id="galeriePhoto" clipPathUnits="objectBoundingBox">
            <polygon points=".495,1 0,1 0,0" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default FrontPage;
