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
  ${tw`flex flex-col items-start md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`my-0 pt-12 w-full text-center text-white`;


const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 flex`}
`;

const Card = styled.span`
  ${tw`flex flex-col mx-auto max-w-xs px-6 py-10 border-2 bg-white rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-2 flex-shrink-0 relative`}
    img {
      ${tw`w-20 h-20`}
    }
  }

  .textContainer {
    ${tw`mt-2 text-center`}
  }

  .title {
    ${tw`font-bold text-xl leading-none text-primary-600`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;


export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

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