import styled from "styled-components";

const size = {
  xs: "320px",
  sm: "768px",
  lg: "1200px",
};

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(max-width: ${size.lg})`,
};

const Page = styled.div`
  background-color: black;
  width: 100%;
  overflow: hidden;
`;

const Avatar = styled.div`
  position: relative;
`;

const BlocClipPath = styled.div`
  height: 1vh;
  @media ${device.sm} {
    display: none;
  }
`;

const TriangleHaut = styled.img`
  clip-path: url(#issPhoto);
  opacity: 1;
  display: block;
  transition: 0.5s ease;
  width: 100%;
  height: 100%;
  @media ${device.sm} {
    position: relative;
  }
`;

const TriangleDroit = styled.img`
  clip-path: url(#roverPhoto);
  opacity: 1;
  display: block;
  transition: 0.5s ease;
  position: absolute;
  top: 0.4vh;
  width: 100%;
  height: 100%;
  &:hover {
    opacity: 0.3;
  }
  @media ${device.sm} {
    position: relative;
    margin-top: -2px;
  }
`;

const TriangleGauche = styled.img`
  clip-path: url(#galeriePhoto);
  opacity: 1;
  display: block;
  transition: 0.5s ease;
  position: absolute;
  top: 0.4vh;
  width: 100%;
  height: 100%;
  &:hover {
    opacity: 0.3;
  }
  @media ${device.sm} {
    position: relative;
  }
`;

const ContainerTextISS = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  font-size: 5em;
  font-family: "Quantum";
  z-index: 2;
  top: 35vh;
  color: white;
  right: 40vw;
  transform: translate(-50%, -50%);
  text-align: center;
  @media ${device.sm} {
    position: absolute;
    top: 11vh;
    right: 18vh;
    font-size: 2em;
    opacity: 100;
    color: white;
    font-weight: bold;
  }
`;

const ContainerTextRover = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  font-size: 5em;
  font-family: "Quantum";
  top: 60vh;
  color: white;
  right: 0;
  transform: translate(-50%, -50%);
  text-align: center;
  &:hover {
    opacity: 1;
  }
  @media ${device.sm} {
    position: absolute;
    top: 48vh;
    left: 28vh;
    font-size: 2em;
    opacity: 100;
    color: white;
    font-weight: bold;
  }
`;

const ContainerTextGalerie = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 60vh;
  font-size: 5em;
  font-family: "Quantum";
  color: white;
  left: 14vw;
  transform: translate(-50%, -50%);
  text-align: center;
  &:hover {
    opacity: 1;
  }
  @media ${device.sm} {
    position: absolute;
    top: 83vh;
    left: 28vh;
    font-size: 2em;
    opacity: 100;
    color: white;
    font-weight: bold;
  }
`;

const ZoneISS = styled.div`
  &:hover ${TriangleHaut} {
    opacity: 0.3;
  }
  &:hover ${ContainerTextISS} {
    opacity: 1;
  }
  @media ${device.sm} {
    &:hover ${TriangleHaut} {
      opacity: 1;
    }
    &:hover ${ContainerTextISS} {
      opacity: 1;
    }
  }
`;

const ZoneRover = styled.div`
  &:hover ${TriangleDroit} {
    opacity: 0.3;
  }

  &:hover ${ContainerTextRover} {
    opacity: 1;
  }
  @media ${device.sm} {
    &:hover ${TriangleDroit} {
      opacity: 1;
    }
    &:hover ${ContainerTextRover} {
      opacity: 1;
    }
  }
`;

const ZoneGalerie = styled.div`
  &:hover ${TriangleGauche} {
    opacity: 0.3;
  }
  &:hover ${ContainerTextGalerie} {
    opacity: 1;
  }
  @media ${device.sm} {
    &:hover ${TriangleGauche} {
      opacity: 1;
    }
    &:hover ${ContainerTextGalerie} {
      opacity: 1;
    }
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

      <BlocClipPath>
        <svg>
          <defs>
            <clipPath id="issPhoto" clipPathUnits="objectBoundingBox">
              <polygon points="0.999,0 .5,1 0,0" />
            </clipPath>
            <clipPath id="roverPhoto" clipPathUnits="objectBoundingBox">
              <polygon points="1,0 1,1 .503,1" />
            </clipPath>
            <clipPath id="galeriePhoto" clipPathUnits="objectBoundingBox">
              <polygon points=".497,1 0,1 0,0" />
            </clipPath>
          </defs>
        </svg>
      </BlocClipPath>
    </Page>
  );
}

export default FrontPage;
