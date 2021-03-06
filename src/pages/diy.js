import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Bernd from "../images/DIY/bernd.jpg";
import Curtain from "../images/DIY/CurtainPole.jpg";
import Lamp from "../images/DIY/Lamp.jpg";
import Rack from "../images/DIY/Rack01.jpg";
import Shades from "../images/DIY/shades.jpg";
import { Typography } from "../theme/diy";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
`;

const Heading = styled.h1`
  ${Typography.heading}
`;

const EntryGrid = styled.div`
  display: grid;
  width: 960px;
  margin-bottom: 20px;
  grid-template-areas:
    "photo title title"
    "photo description description";
  @media (max-width: 960px) {
    justify-content: center;
    grid-template-areas:
      "photo"
      "title"
      "description";
  }
`;

const Photo = styled.img`
  margin: 0;
  grid-area: photo;
  max-height: 420px;
  @media (max-width: 960px) {
    justify-self: center;
  }
`;

const Title = styled.h2`
  grid-area: title;
  align-self: flex-end;
  margin: 5px 0 0 0;

  ${Typography.title};
`;
const Description = styled.p`
  grid-area: description;
  margin: 0;
  max-width: 200px;

  ${Typography.description};
`;

const Entry = ({ title, description, src }) => (
  <EntryGrid>
    <Photo src={src} />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </EntryGrid>
);

const ENTRIES = [
  {
    title: "Lamp Shades",
    description: "A4 & A3 sized shades made out of a paper fabric mix.",
    src: Shades
  },
  {
    title: "Rack",
    description: "Painted and welded construction steel rods.",
    src: Rack
  },
  {
    title: "Leather Chair",
    description: "Was a piece of a blue velvet Rolf Benz sofa.",
    src: Bernd
  },
  {
    title: "Curtain-Rod",
    description: "Simple construction made out of tin heating pipes.",
    src: Curtain
  },
  {
    title: "Ladder Chandelier",
    description: "Fixed to the ceiling with tow and metal chain.",
    src: Lamp
  }
];

const SelfmadePage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Selfmade / Philip Poloczek</title>
      <meta
        name="description"
        content="Selfmade Furniture by Philip Poloczek"
      />
      <meta name="keywords" content="diy, furniture, selfmade" />
      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display:400,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Page>
      <Heading>Stuff I've Built</Heading>
      {ENTRIES.map(entry => (
        <Entry {...entry} />
      ))}
    </Page>
  </>
);

export default SelfmadePage;
