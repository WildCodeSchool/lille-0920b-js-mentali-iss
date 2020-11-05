import React from 'react';
import styled from 'styled-components';

 const Mainfooter = styled.footer
   ` width: 100vw;
    height: 13vh;
    display: flex;
    align-items: center;
    background-color: #34263a;
    padding: 4px 20px 4px 20px;
    position: relative;
    bottom: 0;
    color: white;
    line-height:18px;`

const Footcontainer = styled.div
   ` display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;`

const Row = styled.div
    `display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60%;`

const Row2 = styled.div
   ` display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 20%;`

const Col1 = styled.div 
`    text-align: justify;
    display: flex;
    flex-direction: column;
    align-items: center;`

const Col2 = styled.div
    `width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;`

const Col3 = styled.div 
  `  width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;`

const H4 = styled.h4
  ` color: #fff;
    text-transform: uppercase;
    margin-top: 5px;
    margin-bottom: 5px;
    letter-spacing: 2px;`

const Textjustify = styled.p
`    font-size: 12px;`

const H4BIS = styled.h4
   ` font-size: 12px;`

const Footerlinks = styled.ul
   ` padding-left: 0;
    list-style: none;`

const Footlinks = styled.a
   `font-size: 12px;
    color: white;
    text-decoration: none;
    &:hover {
        color: #3366cc;
        text-decoration: none;
    }
`
const Socialicons = styled.ul
    `margin-top: 15px;`

const SocialLi = styled.li
    ` display: inline-block;
    margin-bottom: 4px;`

const SocialA = styled.a
    `width: 40px;
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
        background-color:darkblue;
    }`

const Fb = styled.img
    ` width: 40px;`
const Tweet = styled.img
    ` width: 40px;`
const Insta = styled.img
    `  width: 40px;`
const LinkDin = styled.img
    `  width: 40px;`


const Footer2 = () => {
    return (
      <Mainfooter>
        <Footcontainer>
          <Row>
            {/* Column1 */}
            <Col1>
              <H4>A PROPOS</H4>
              <Textjustify>
                Mental-ISS.com fournit une information complète concernant la
                station spatiale internationale. Mental-ISS se consacre à <br />
                maintenir la position de l&apos;ISS sur une carte en temps réel, à
                fournir les données permettant d&apos;observer la station depuis{" "}
                <br />
                chez soi, de mettre à disposition les photos de l&apos;espace par
                la NASA.
              </Textjustify>
            </Col1>
            {/* Column2 */}
            <Col2>
              <H4BIS>QUICK LINKS</H4BIS>
              <Footerlinks>
                <li>
                  <Footlinks href="http://scanfcode.com/about/">About Us</Footlinks>
                </li>
                <li>
                  <Footlinks href="http://scanfcode.com/contact/">Contact Us</Footlinks>
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
              <h4>FOLLOW US</h4>
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
                    <LinkDin src="/photos/link.png" alt="Link to Instagram"></LinkDin>
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
  