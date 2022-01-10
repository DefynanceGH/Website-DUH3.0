import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";
import defaultCardImage from "../../images/shield-icon.svg";
import SavingIcon from "../../images/piggy-bank-solid.svg";
import CreditIcon from "../../images/gauge-solid.svg";
import ResoucesIcon from "../../images/resource.png";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const Container = tw.div`relative bg-gray-200`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-start md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full ml-6 text-left text-primary-100`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 flex`}
`;

const Card = styled.div`
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

const PrimaryAction = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw` text-white no-underline rounded bg-primary-500 mx-auto inline-block mb-10 text-sm font-semibold hocus:bg-white hocus:text-primary-600 focus:shadow-outline
  `}
`

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
      imageSrc: CreditIcon,
      title: "Credit Improvement",
      description: "Defynance pays off your student loans so your credit score and debt-to-income ratio should improve right away."
    },
    { imageSrc: SavingIcon, 
      title: "Cash-Back",
      description: "A savings mechanism is built into each ISA that allows you to receive cash back at the end of the ISA term."
    },
    { imageSrc: ResoucesIcon,
      title: "Resources",
      description: "An ecosystme of career and life resources designed to optimize income so you get the most out of your potential."
    },
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading><p tw="text-black text-base">Live life on your terms</p>Features and Benefits</Heading>
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
      <div tw="flex">
        <PrimaryAction target="_blank" href="http://portal.defynance.com/" >Get an ISA Quote</PrimaryAction>
      </div>
    </Container>
  );
};