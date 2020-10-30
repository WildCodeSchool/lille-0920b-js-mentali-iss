import "./FrontPage.css";

function FrontPage() {
  return (
    <div className="FrontPage">
      <div className="pageOption">
        <a href="#b" className="option" data-inf="photo">
          <img src="/photos/iss.jpg" className="image" id="iss" alt="ISS" />
          <h4>ISS</h4>
        </a>

        <a href="#b" className="option" data-inf="cinema">
          <img
            src="/photos/galerie.jpg"
            className="image"
            id="galerie"
            alt="galerie"
          />
          <h3>Galerie</h3>
        </a>
      </div>
    </div>
  );
}

export default FrontPage;
