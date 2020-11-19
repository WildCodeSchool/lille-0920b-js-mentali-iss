import React from "react";
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

const Photo = styled.img`
  width: 60vw;
  height: auto;
  margin-left: auto;
  margin-right: auto;

  @media ${device.xs} {
    width: 80vw;
  }
`;

const Paragraph = styled.div`
  text-align: center;
  color: white;
`;

const Date = styled.p`
  font-size: 2em;
  margin-bottom: 3vh;
  font-family: Vindemia;
  @media ${device.xs} {
    font-size: 1em;
  }
`;

const Title = styled.p`
  font-size: 2.5em;
  font-weight: bold;
  margin-top: 2vh;
  margin-bottom: 2vh;
  font-family: Vindemia;
  @media ${device.xs} {
    font-size: 1em;
  }
`;

const Auteur = styled.p`
  font-size: 1.5em;
  font-style: italic;
  margin-bottom: 2vh;
  @media ${device.xs} {
    font-size: 1em;
  }
`;

const Explanation = styled.p`
  margin-right: 6vw;
  margin-left: 6vw;
  margin-bottom: 6vh;
  line-height: 1.2;
`;

function DisplayGalerie({ photo }) {
  return (
    <div className="DisplayGalerie">
      <Paragraph>
        <Date>- {photo.date} -</Date>
        <Photo src={photo.hdurl} alt={photo.title} />
        <Title>{photo.title}</Title>
        <Auteur>{photo.copyright}</Auteur>
        <Explanation>{photo.explanation}</Explanation>
      </Paragraph>
    </div>
  );
}

export default DisplayGalerie;
