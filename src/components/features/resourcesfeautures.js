import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";
import defaultCardImage from "images/shield-icon.svg";
import arrowImage from "images/longrightarrow.svg";
import SavingIcon from "images/piggy-bank-solid.svg";
import TeamIcon from "images/teamwork.svg";
import WellNessIcon from "images/wellness.svg";
import CreditIcon from "images/credit.svg";
import FinancesIcon from "images/finances.svg";
import EntrepreneurshipIcon from "images/entrepreneurship.svg";
import ViewAllIcon from "images/viewall.svg";

const NavLink = tw.a`
  cursor-pointer my-auto
`;

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

  .imagesContainer {
    ${tw`flex flex-row justify-between`}
  }

  .imageContainer {
    ${tw`border-2 border-primary-500 text-left rounded-full p-2 flex relative`}
    img {
      ${tw`w-32 h-32`}
    }
  }

  .imageContainer2 {
    ${tw`border-2 border-primary-500 text-primary-500 text-left rounded-full p-2 flex relative`}
    img {
      ${tw`fill-current my-auto w-16 h-16`}
    }
  }

  .textContainer {
    ${tw`mt-2 text-left`}
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
      imageSrc: TeamIcon,
      title: "Career",
      description: "Maximize your earning potential through career counseling, salary negotiation, job boards, and more."
    },
    { imageSrc: WellNessIcon, 
      title: "Wellness",
      description: "Stay physically, mentally, and spiritualy healhty by connecting with services to ensure a happy future."
    },
    { imageSrc: CreditIcon,
      title: "Credit",
      description: "Good credit or bad credit, we have resources to help navigate and educate you through the world of credit."
    },
    { imageSrc: FinancesIcon,
        title: "Finances",
        description: "Improve your finanical well-being and literacy with investing, budgeting, and other services."
    },
    { imageSrc: EntrepreneurshipIcon,
        title: "Entrepreneurship",
        description: "Resources designed to help help you start and run a business to you can achieive personal and financial goals."
    },
    { imageSrc: ViewAllIcon,
        title: "View ALL",
        description: "Brose through nearly 100 resources to find the help you need. We are here to help along with our partners."
    },
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading><p tw="text-black text-base">personal and professional help</p>Ecosystem of Resources</Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
              <div className="imagesContainer">
                <span className="imageContainer">
                    <img src={card.imageSrc || defaultCardImage} alt="" />
                </span>
                <span className="imageContainer2">
                    <NavLink href="http://portal.defynance.com/login/?next=/resources"><img src={arrowImage} alt="" /></NavLink>
                </span>
              </div>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};