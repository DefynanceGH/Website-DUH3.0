import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";
import defaultCardImage from "../../images/shield-icon.svg";
import Techstars from "../../images/techstarslogo.png";
import Embarc from "../../images/embarc.png";
import Atdc from "../../images/atdc.png";


const Container = tw.div`relative bg-black`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-start md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl pb-10 mx-auto`}
`;
const Heading = tw(SectionHeading)`my-4 pt-12 w-full text-center text-white font-bold`;


const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 flex`}
`;




export default () => {

  const cards = [
    {
      imageSrc: Techstars ,
      title: "Responsibility",
      description: "We do what is right. We are committed to ensuring our actions are moral for just."
    },
    { imageSrc: Embarc, 
      title: "Honesty",
      description: "We are true. We are open and transparent about the choices we make."
    },
    { imageSrc: Atdc,
      title: "Community",
      description: "We work together. We build meaningful relationships to support each other and our customers."
    },
  ];

  return (
    <Container>
        <Heading>OUR PARTNERS AND SUPPORTERS</Heading>
      <ThreeColumnContainer>
        {cards.map((card, i) => (
          <Column key={i}>
            <span className="imageContainer" tw="my-auto">
                <img tw=" items-center border-2 border-primary-500 text-center p-2 flex-shrink-0 relative w-3/4" src={card.imageSrc || defaultCardImage} alt="" />
            </span>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};