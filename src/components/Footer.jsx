import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="foot-container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>ABOUT</h4>
            <p className="text-justify">
              Mental-ISS.com provides you complete informations about the
              international space station. <br />
              Mental-ISS is dedicated to maintain the ISS position on a map in
              real time, provide you the <br /> data to observe the station from
              home and to provide you Nasa's photos.
            </p>
          </div>
          {/* Column2 */}
          <div className="col2">
            <h4>QUICK LINKS</h4>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Contact Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col3">
            <h4>FOLLOW US</h4>
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#7">
                  <img
                    id="fcb-photos"
                    src="/photos/facebook.png"
                    alt="Link to facebook"
                  ></img>
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href="#8">
                  <img
                    id="tweet-photos"
                    src="/photos/tweet.png"
                    alt="Link to Twitter"
                  ></img>
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a className="linkedin" href="#10">
                  <img
                    id="insta-photos"
                    src="/photos/insta.png"
                    alt="Link to LinkedIn"
                  ></img>
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a className="instagram" href="#11">
                  <img
                    id="link-photos"
                    src="/photos/link.png"
                    alt="Link to Instagram"
                  ></img>
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row2">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} MENTAL-ISS | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
