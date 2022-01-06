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


const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-start md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full ml-6 text-left text-primary-100`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/2 flex`}
`;

const Card = styled.div`
  ${tw`flex px-6 py-10 border-2 border-primary-600 bg-white rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-2 flex-shrink-0 relative`}
    img {
      ${tw`w-20 h-20`}
    }
  }

  .textContainer {
    ${tw`mt-2 mx-6 text-left`}
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
      imageSrc: CreditIcon,
      title: "Affordable Payments",
      description: "Payments are tied to your income so they remain affordable and you always have peace of mind."
    },
    { imageSrc: SavingIcon, 
      title: "Payment Cap",
      description: "There is a limit to how much you will repay. Once the payment cap is reached, your ISA obligation will be fulfilled."
    },
    { imageSrc: ResoucesIcon,
      title: "Deferrals",
      description: "We don’t require a payment when your income falls below the minimum payment threshold."
    },
    { imageSrc: ResoucesIcon,
      title: "Prepayment",
      description: "You will always be able to make extra payments and reduce your ISA term one month at a time."
    },
    { imageSrc: ResoucesIcon,
      title: "Fixed Term",
      description: "Unlike loans which can have a growing balance, there is a definitive end date to your ISA so you know exactly when your servicing will end."
    },
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading><p tw="text-black text-base">Safeguards</p>Consumer Protections</Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card >
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
