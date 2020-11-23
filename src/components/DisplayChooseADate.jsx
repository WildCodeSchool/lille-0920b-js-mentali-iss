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
  width: 50vw;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border: solid white;
  @media ${device.xs} {
    width: 80vw;
  }
`;

const Paragraph = styled.div`
  display: flex;
  flex-direction: row;
  @media ${device.xs} {
    flex-direction: column;
  }
`;

const FlexBox1 = styled.div`
  margin-left: 2vw;
  margin-right: 2vw;
  @media ${device.xs} {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2vh;
  }
`;

const FlexBox2 = styled.p`
  text-align: left;
  margin-right: 4vw;
  margin-bottom: auto;
  margin-top: auto;
  @media ${device.xs} {
    margin-left: 0;
    margin-right: 0;
    text-align: center;
  }
`;

const Date = styled.p`
  font-size: 2em;
  margin-bottom: 3vh;
  @media ${device.xs} {
    font-size: 1em;
  }
`;

const Title = styled.p`
  font-size: 2em;
  font-weight: bold;
  margin-top: 2vh;
  margin-bottom: 4vh;
  @media ${device.xs} {
    font-size: 1.5em;
  }
`;

const Auteur = styled.p`
  font-size: 1.5em;
  font-style: italic;
  margin-bottom: 2vh;
  @media ${device.xs} {
    font-size: 1.3em;
  }
`;

const Explanation = styled.p`
  line-height: 1.2;
  @media ${device.xs} {
    margin-left: 3vw;
    margin-right: 3vw;
  }
`;

function DisplayChooseADate({ photo }) {
  return (
    <div className="DisplayGalerie">
      <Paragraph>
        <FlexBox1>
          <Photo src={photo.hdurl} alt={photo.title} />
        </FlexBox1>
        <FlexBox2>
          <Date>
            <p>{photo.date}</p>
          </Date>
          <Title>
            <p>{photo.title}</p>
          </Title>
          <Auteur>
            <p>{photo.copyright}</p>
          </Auteur>
          <Explanation>
            <p>{photo.explanation}</p>
          </Explanation>
        </FlexBox2>
      </Paragraph>
    </div>
  );
}

export default DisplayChooseADate;
