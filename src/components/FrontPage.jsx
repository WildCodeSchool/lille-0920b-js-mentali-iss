import "./FrontPage.css";

function FrontPage() {
  return (
    <div className="Page">
      <div class="avatar">
        <div className="ZoneISS">
          <img
            className="TriangleHaut"
            id="iss"
            src="https://s.france24.com/media/display/81e068e6-9c12-11e9-be8b-005056bff430/w:1280/p:16x9/070619-iss-space-tourism-m.webp"
            alt=""
          />

          <h4 className="textIss">ISS</h4>
        </div>
        <div className="ZoneRover">
          <img
            src="/photos/rover.jpg"
            className="TriangleDroit"
            id="rover"
            alt="rover"
          />
          <h4 className="textRover">Rover</h4>
        </div>
        <div className="ZoneGalerie">
          <img
            src="/photos/galerie.jpg"
            className="TriangleGauche"
            id="galerie"
            alt="galerie"
          />
          <h4 className="textGalerie">Galerie</h4>
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
