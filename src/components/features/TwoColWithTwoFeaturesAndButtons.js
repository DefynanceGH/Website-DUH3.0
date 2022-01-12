import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";
import defaultCardImage from "../../images/shield-icon.svg";
import CalculatorIcon from "../../images/calculator-solid.svg";
import LockIcon from "../../images/lock-solid.svg";
import ClockIcon from "../../images/clock-regular.svg";
import MoneyIcon from "images/hand-holding-usd-solid.svg"
import FlagIcon from "images/flag-checkered-solid.svg"

const Container = tw.div`relative mx-32`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-start md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full ml-6 font-bold text-left text-primary-100`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/2 flex`}
`;

const Card = styled.div`
  ${tw`flex px-6 py-4 border-2 border-solid border-primary-600 bg-white rounded-lg mt-12 mx-2`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-2 relative`}
    img {
      ${tw`w-20 h-20`}
    }
  }

  .textContainer {
    ${tw`mt-2 mx-6 text-left`}
  }

  .title {
    ${tw`pb-16 font-bold text-xl leading-none text-primary-600`}
  }

  .description {
    ${tw`my-0 py-0 w-5/6 font-semibold text-black text-sm`}
  }
`;


export default () => {

  const cards = [
    {
      imageSrc: CalculatorIcon,
      title: "Affordable Payments",
      description: "Payments are tied to your income so they remain affordable and you always have peace of mind."
    },
    { imageSrc: LockIcon, 
      title: "Payment Cap",
      description: "There is a limit to how much you will repay. Once the payment cap is reached, your ISA obligation will be fulfilled."
    },
    { imageSrc: ClockIcon,
      title: "Deferrals",
      description: "We don’t require a payment when your income falls below the minimum payment threshold."
    },
    { imageSrc: MoneyIcon,
      title: "Prepayment",
      description: "You will always be able to make extra payments and reduce your ISA term one month at a time."
    },
    { imageSrc: FlagIcon,
      title: "Fixed Term",
      description: "Unlike loans which can have a growing balance, there is a definitive end date to your ISA so you know exactly when your servicing will end."
    },
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading><p tw="font-semibold text-black text-base my-0">SAFEGUARDS</p>Consumer Protections</Heading>
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
