import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";
import defaultCardImage from "../../images/defaultavatar.png";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedInIcon } from "images/linkedin-icon.svg";
import { ReactComponent as InstagramIcon } from "images/instagram-icon.svg";

const Container = tw.div`relative bg-gray-200`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-start md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-12`}
`;
const Heading = tw(SectionHeading)`my-0 pt-12 w-full text-center text-primary-100`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 flex`}
`;

const SocialLinksContainer = tw.div`text-center`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-500 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs w-3/4 py-10 border-2 bg-white rounded-lg mt-12`}
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

  const team = [
    {
      imageSrc: null,
      title: "Farrukh Siddiqui",
      description: "Founder and CEO"
    },
    { imageSrc: null, 
      title: "Thomas Tellner",
      description: "Co-founder & Head of Risk"
    },
    { imageSrc: null,
      title: "Grace Beroes",
      description: "Customer Success Lead"
    },
    { imageSrc: null,
      title: "Ibrahim Koshul",
      description: "Sr. Analyst, Investor Relations"
    },
    { imageSrc: null,
      title: "Monica Khourie",
      description: "Marketing Lead"
    },
    { imageSrc: null,
      title: "Sad Raza",
      description: "Analyst, Accounting"
    },
    { imageSrc: null,
      title: "Aakash Sheth",
      description: "Sr. Manager, ML Ops"
    },
    { imageSrc: null,
      title: "Camilo Morales",
      description: "Full Stack Engineer"
    },
    { imageSrc: null,
      title: "Tommy Ngo",
      description: "Sr. Manager, Product"
    }
  ];

  const advisors = [
    {
      imageSrc: null,
      title: null,
      description: null
    },
    { imageSrc: null, 
      title: null,
      description: null
    },
    { imageSrc: null,
      title: null,
      description: null
    }
  ];

  return (
    <Container>
        <Heading><p tw="text-black text-base">Meet the Team</p>Who We Are</Heading>
        <ThreeColumnContainer>
            {team.map((card, i) => (
                <Column key={i}>
                <Card>
                    <span className="imageContainer">
                    <img src={card.imageSrc || defaultCardImage} alt="" />
                    </span>
                    <span className="textContainer">
                    <span className="title">{card.title || "Lorem Ipsum"}</span>
                    <p className="description">
                        {card.description || "Lorem Ipsum"}
                    </p>
                    </span>
                    <SocialLinksContainer>
                    <SocialLink href="https://twitter.com">
                        <TwitterIcon />
                    </SocialLink>
                    <SocialLink href="https://linkedin.com">
                        <LinkedInIcon />
                    </SocialLink>
                    <SocialLink href="https://instagram.com">
                        <InstagramIcon />
                    </SocialLink>
                    <SocialLink href="https://facebook.com">
                        <FacebookIcon />
                    </SocialLink>
                    </SocialLinksContainer>
                </Card>
                </Column>
            ))}
        </ThreeColumnContainer>
        <Heading><p tw="text-black text-base">Our Support network</p>Advisors</Heading>
        <ThreeColumnContainer>
            {advisors.map((card, i) => (
                <Column key={i}>
                <Card>
                    <span className="imageContainer">
                    <img src={card.imageSrc || defaultCardImage} alt="" />
                    </span>
                    <span className="textContainer">
                    <span className="title">{card.title || "First Last"}</span>
                    <p className="description">
                        {card.description || "Organization"}
                    </p>
                    </span>
                    <SocialLinksContainer>
                    <SocialLink href="https://twitter.com">
                        <TwitterIcon />
                    </SocialLink>
                    <SocialLink href="https://linkedin.com">
                        <LinkedInIcon />
                    </SocialLink>
                    <SocialLink href="https://instagram.com">
                        <InstagramIcon />
                    </SocialLink>
                    <SocialLink href="https://facebook.com">
                        <FacebookIcon />
                    </SocialLink>
                    </SocialLinksContainer>
                </Card>
                </Column>
            ))}
        </ThreeColumnContainer>
    </Container>
  );
};