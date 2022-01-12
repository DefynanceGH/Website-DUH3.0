import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";
import defaultCardImage from "../../images/shield-icon.svg";
import CreditIcon from "../../images/gauge-solid.svg";


const Container = tw.div`relative bg-gray-200`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-start md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto pb-10`}
`;
const Heading = tw(SectionHeading)`pt-12 w-full font-bold ml-6 my-0 text-center text-primary-100`;

const Subheading = tw.h3`mx-auto w-4/6 text-center font-bold text-black`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs px-6 py-10 border-2 bg-white rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-2 relative`}
    img {
      ${tw`w-24 h-24`}
    }
  }

  .textContainer {
    ${tw`mt-2 text-center`}
  }

  .title {
    ${tw`font-bold text-xl leading-none text-primary-600`}
  }

  .description {
    ${tw`mt-3 px-8 font-semibold text-black text-sm leading-none`}
  }
`;


export default () => {

  const cards = [
    {
      imageSrc: CreditIcon,
      title: "Responsibility",
      description: "We do what is right. We are committed to ensuring our actions are moral for just."
    },
    { imageSrc: CreditIcon, 
      title: "Honesty",
      description: "We are true. We are open and transparent about the choices we make."
    },
    { imageSrc: CreditIcon,
      title: "Community",
      description: "We work together. We build meaningful relationships to support each other and our customers."
    },
  ];

  return (
    <Container>
        <Heading><p tw="text-black text-xl font-semibold my-0">WHAT DRIVES US</p>Our Mission</Heading>
        <Subheading>We make a positive impact on the lives of student loan holders to optimize their goals through financial solutions.</Subheading>
      <ThreeColumnContainer>
        <Heading><p tw="text-black text-xl font-semibold my-0 pt-0">HOW WE OPERATE</p>Core Values</Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};