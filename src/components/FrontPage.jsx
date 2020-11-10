import styled from "styled-components";

const Page = styled.div`
  background-color: black;
  width: 100%;
  height: 112vh;
  margin-top: 5vh;
`;

const Avatar = styled.div`
  position: relative;
  margin-top: 5vh;
`;

const TriangleHaut = styled.img`
  clip-path: url(#issPhoto);
  opacity: 1;
  display: block;
  transition: 0.5s ease;
  width: 100%;
  height: 100%;
`;

const TriangleDroit = styled.img`
  clip-path: url(#roverPhoto);
  opacity: 1;
  display: block;
  transition: 0.5s ease;
  position: absolute;
  top: 0.4vh;
  right: 0vw;
  width: 100%;
  height: 100%;
  &:hover {
    opacity: 0.3;
  }
`;

const TriangleGauche = styled.img`
  clip-path: url(#galeriePhoto);
  opacity: 1;
  display: block;
  transition: 0.5s ease;
  position: absolute;
  top: 0.4vh;
  right: 0.4vw;
  width: 100%;
  height: 100%;
  &:hover {
    opacity: 0.3;
  }
`;

const ContainerTextISS = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  font-size: 5em;
  z-index: 2;
  top: 35vh;
  color: white;
  right: 40vw;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const ContainerTextRover = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  font-size: 5em;
  top: 60vh;
  color: white;
  right: 0;
  transform: translate(-50%, -50%);
  text-align: center;

  &:hover {
    opacity: 1;
  }
`;

const ContainerTextGalerie = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 60vh;
  font-size: 5em;
  color: white;
  left: 14vw;
  transform: translate(-50%, -50%);
  text-align: center;
  &:hover {
    opacity: 1;
  }
`;

const ZoneISS = styled.div`
  &:hover ${TriangleHaut} {
    opacity: 0.3;
  }
  &:hover ${ContainerTextISS} {
    opacity: 1;
  }
`;

const ZoneRover = styled.div`
  &:hover ${TriangleDroit} {
    opacity: 0.3;
  }
  &:hover ${ContainerTextRover} {
    opacity: 1;
  }
`;

const ZoneGalerie = styled.div`
  &:hover ${TriangleGauche} {
    opacity: 0.3;
  }
  &:hover ${ContainerTextGalerie} {
    opacity: 1;
  }
`;

function FrontPage() {
  return (
    <Page>
      <Avatar>
        <ZoneISS>
          <TriangleHaut src="/photos/iss2.png" id="iss" alt="ISS" />
          <ContainerTextISS>
            <div className="textISS">ISS</div>
          </ContainerTextISS>
        </ZoneISS>

        <ZoneRover>
          <TriangleDroit img src="/photos/rover.jpg" id="rover" alt="rover" />

          <ContainerTextRover>
            <div className="textRover">Rover</div>
          </ContainerTextRover>
        </ZoneRover>

        <ZoneGalerie>
          <TriangleGauche
            img
            src="/photos/galerie.jpg"
            id="galerie"
            alt="galerie"
          />

          <ContainerTextGalerie>
            <div className="textGalerie">Galerie</div>
          </ContainerTextGalerie>
        </ZoneGalerie>
      </Avatar>

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
