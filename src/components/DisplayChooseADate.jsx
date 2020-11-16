import React from "react";
import styled from "styled-components";

const Photo = styled.img`
  width: 50vw;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border: solid white;
`;

const Paragraph = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexBox1 = styled.div`
  margin-left: 2vw;
  margin-right: 2vw;
`;

const FlexBox2 = styled.p`
  text-align: left;
  margin-right: 4vw;
  margin-bottom: auto;
  margin-top: auto;
`;

const Date = styled.p`
  font-size: 2em;
  margin-bottom: 3vh;
`;

const Title = styled.p`
  font-size: 2em;
  font-weight: bold;
  margin-top: 2vh;
  margin-bottom: 4vh;
`;

const Auteur = styled.p`
  font-size: 1.5em;
  font-style: italic;
  margin-bottom: 2vh;
`;

const Explanation = styled.p`
  line-height: 1.2;
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
