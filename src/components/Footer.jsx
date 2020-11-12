import React from "react";
import styled from "styled-components";

const size = {
  xs: '320px',
  sm: '768px',
  lg: '1200px',
 };

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
 };


const Mainfooter = styled.footer`
  width: 99.2vw;
  height: auto;
  display: flex;
  align-items: center;
  background-color: #34263a;
  padding: 4px 20px 4px 20px;
  position: relative;
  bottom: 0;
  color: white;
  line-height: 18px;
  overflow-x: hidden;
`;

const Footcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60%;
  border: solid blue 1px;
  @media ${device.xs} {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

const Row2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 20%;
  @media ${device.xs} {
   display:none;
}

`;

const Col1 = styled.div`
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.xs} {
    display: none;
}
`;

const Col2 = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px blue;
  @media ${device.xs} {
   width: 100%;
}`;

const Col3 = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H4 = styled.h4`
  color: #fff;
  text-transform: uppercase;
  margin-top: 5px;
  margin-bottom: 5px;
  letter-spacing: 2px;
`;

const Textjustify = styled.p`
  font-size: 12px;
`;

const H4BIS = styled.h4`
  font-size: 12px;
  border: solid 2px red;
`;
const H4TER =styled.h4 `
  border: solid 2px blue;
  @media ${device.xs} {
   font-size: 8px;
}`;

const Footerlinks = styled.ul`
  padding-left: 0;
  list-style: none;
  border: solid 2px red;
  @media ${device.xs} {
   text-align: center;
}
`;

const Footlinks = styled.a`
  font-size: 12px;
  color: white;
  text-decoration: none;
  &:hover {
    color: #3366cc;
    text-decoration: none;
  }
`;
const Socialicons = styled.ul`
  margin-top: 15px;
  border: solid 1px green;
  @media ${device.xs} {
   display: flex;
}
`;

const SocialLi = styled.li`
  display: inline-block;
  margin-bottom: 4px;
`;

const SocialA = styled.a`
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 2px;
  margin-right: 0;
  border-radius: 100%;
  background-color: white;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  display: inline-block;
  &:hover {
    background-color: darkblue;
  }
`;

const Fb = styled.img`
  width: 40px;
`;
const Tweet = styled.img`
  width: 40px;
`;
const Insta = styled.img`
  width: 40px;
`;
const LinkDin = styled.img`
  width: 40px;
`;

const Footer2 = () => {
  return (
    <Mainfooter>
      <Footcontainer>
        <Row>
          {/* Column1 */}
          <Col1>
            <H4>ABOUT</H4>
            <Textjustify>
              Mental-ISS.com provides you complete informations about the
              international space station. <br /> Mental-ISS is dedicated to
              maintain the ISS position on a map in real time, provide you the{" "}
              <br /> data to observe the station from home and to provide you
              Nasa's photos.
            </Textjustify>
          </Col1>
          {/* Column2 */}
          <Col2>
            <H4BIS>QUICK LINKS</H4BIS>
            <Footerlinks>
              <li>
                <Footlinks href="http://scanfcode.com/about/">
                  About Us
                </Footlinks>
              </li>
              <li>
                <Footlinks href="http://scanfcode.com/contact/">
                  Contact Us
                </Footlinks>
              </li>
              <li>
                <Footlinks href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </Footlinks>
              </li>
            </Footerlinks>
          </Col2>
          {/* Column3 */}
          <Col3>
            <H4TER>FOLLOW US</H4TER>
            <Socialicons>
              <SocialLi>
                <SocialA href="#7">
                  <Fb src="/photos/facebook.png" alt="Link to facebook"></Fb>
                  <i className="fa fa-facebook" />
                </SocialA>
              </SocialLi>
              <SocialLi>
                <SocialA href="#8">
                  <Tweet src="/photos/tweet.png" alt="Link to Twitter"></Tweet>
                  <i className="fa fa-twitter" />
                </SocialA>
              </SocialLi>
              <SocialLi>
                <SocialA href="#10">
                  <Insta src="/photos/insta.png" alt="Link to LinkedIn"></Insta>
                  <i className="fa fa-linkedin" />
                </SocialA>
              </SocialLi>
              <SocialLi>
                <SocialA href="#11">
                  <LinkDin
                    src="/photos/link.png"
                    alt="Link to Instagram"
                  ></LinkDin>
                  <i className="fa fa-linkedin" />
                </SocialA>
              </SocialLi>
            </Socialicons>
          </Col3>
        </Row>
        <hr />
        <Row2>
          <p className="col-sm">
            &copy;{new Date().getFullYear()} MENTAL-ISS | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </Row2>
      </Footcontainer>
    </Mainfooter>
  );
};

export default Footer2;
