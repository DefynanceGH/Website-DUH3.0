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
      ${tw`rounded-full w-32 h-32`}
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
      imageSrc: "https://media-exp1.licdn.com/dms/image/C4E03AQGe3At1Cm-gWw/profile-displayphoto-shrink_400_400/0/1517714340232?e=1647475200&v=beta&t=XU7N5zuKdvolA33tXAEZTIS5eOe7SIW3vk8HT4jbffA",
      title: "Farrukh Siddiqui",
      description: "Founder and CEO",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/farrukhsiddiqui1/"
    },
    { imageSrc: "https://media-exp1.licdn.com/dms/image/C4D03AQG1pTkWSYHNGA/profile-displayphoto-shrink_400_400/0/1622220042607?e=1647475200&v=beta&t=ua2JuhKLGx8elAkCiilL7QJluQ52J0ejdCNmeuMh76w", 
      title: "Thomas Tellner",
      description: "Co-founder & Head of Risk",
      twitter: "https://twitter.com/ttellner",
      linkedin: "https://www.linkedin.com/in/thomastellner/"
    },
    { imageSrc: "https://media-exp1.licdn.com/dms/image/C4E03AQE4QZLwLSk0Pw/profile-displayphoto-shrink_400_400/0/1623883321963?e=1647475200&v=beta&t=KjlDndC13pPKZr7RS_EEcywt3HUwUnkbcZeYvCB6SUM",
      title: "Grace Beroes",
      description: "Customer Success Lead",
      twitter: "https://twitter.com/Berciela",
      linkedin: "https://www.linkedin.com/in/graciela-beroes/"
    },
    { imageSrc: "https://media-exp1.licdn.com/dms/image/C4E03AQGsydjldMVGUQ/profile-displayphoto-shrink_400_400/0/1604958993824?e=1647475200&v=beta&t=Q8HYb6h9ULql1-K-sDZS6lGEpiQavH7NOYoJ25x7AnU",
      title: "Ibrahim Koshul",
      description: "Sr. Analyst, Investor Relations",
      twitter: "https://twitter.com/IbrahimKoshul",
      linkedin: "https://www.linkedin.com/in/ibrahim-koshul-2aa53a1b5/"
    },
    { imageSrc: "https://media-exp1.licdn.com/dms/image/C5603AQE_jYUYa4vhAg/profile-displayphoto-shrink_400_400/0/1591054593110?e=1647475200&v=beta&t=lOjhu0u8LT-pe5Bp8f4-Blbx_to_9RbWwOIavdGkNKY",
      title: "Monica Khourie",
      description: "Marketing Lead",
      twitter: "https://twitter.com/monicakhourie",
      linkedin: "https://www.linkedin.com/in/monicakhourie/"
    },
    { imageSrc: "https://media-exp1.licdn.com/dms/image/C5603AQHkSTNtsCImbA/profile-displayphoto-shrink_400_400/0/1622400733584?e=1647475200&v=beta&t=K4z6SIF_9rALYbkdWhEiw8Khm9wqqQTavEKYPEh69ro",
      title: "Sad Raza",
      description: "Analyst, Accounting",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/saad-raza-99bb7939/"
    },
    { imageSrc: "https://media-exp1.licdn.com/dms/image/C5603AQFtahSEuyx0Zg/profile-displayphoto-shrink_400_400/0/1602019502105?e=1647475200&v=beta&t=lSCjGzoGCNOv4pq5hXUTK5Hk2mdDKCKkSea3Cen5OeY",
      title: "Aakash Sheth",
      description: "Sr. Manager, ML Ops",
      twitter: "https://twitter.com/aakashsheth65",
      linkedin: "https://www.linkedin.com/in/aakash-sheth/"
    },
    { imageSrc: "https://media-exp1.licdn.com/dms/image/C4E03AQEBOPln6Histw/profile-displayphoto-shrink_400_400/0/1617045038316?e=1647475200&v=beta&t=AzXP0RW0EEuR-hpdHs-7NNifkQAZBv8bNX4BCnjnoXM",
      title: "Camilo Morales",
      description: "Full Stack Engineer",
      twitter: "https://twitter.com/CamiloAndres_15",
      linkedin: "https://www.linkedin.com/in/camilo-andres-morales/"
    },
    { imageSrc: "https://media-exp1.licdn.com/dms/image/C5603AQG5Hv2iK1LdJQ/profile-displayphoto-shrink_400_400/0/1593470009647?e=1647475200&v=beta&t=cvqRW1cPnF-p9wee6vz_huaUi_RMjxUlb3LnLijC-ZY",
      title: "Tommy Ngo",
      description: "Sr. Manager, Product",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/tommyux/"
    }
  ];

  const advisors = [
    {
      imageSrc: "https://media-exp1.licdn.com/dms/image/C4D03AQGRhSNc48AeWQ/profile-displayphoto-shrink_400_400/0/1594036938321?e=1647475200&v=beta&t=xOxebf8iT2c_mZSRUesPRSVbka7JohYAzMkb3B5XEH0",
      title: "Andres Barreto",
      description: "Techstars",
      twitter: "https://twitter.com/andresbarreto",
      linkedin: "https://www.linkedin.com/in/andreshb/"
    },
    { 
      imageSrc: "https://media-exp1.licdn.com/dms/image/C4E03AQH5-w7K1JUsrQ/profile-displayphoto-shrink_400_400/0/1575578047768?e=1647475200&v=beta&t=2-ajmiv7KopgU_fiqz4VdY-nclbUi5qTYoULJZjnhbA",
      title: "Alison Beckner",
      description: "Beltway Insight",
      twitter: "https://twitter.com/ali_beckner",
      linkedin: "https://www.linkedin.com/in/alisoncbeckner/"
    },
    { 
      imageSrc: "https://media-exp1.licdn.com/dms/image/C4E03AQES_pyHrNMKGg/profile-displayphoto-shrink_400_400/0/1517715249061?e=1647475200&v=beta&t=P7jfgqLQ1gNuGW_A8HPBryioeDh9vYef5ZvKL4px4qw",
      title: "Vivek Boray",
      description: "Locus.sh",
      twitter: "https://twitter.com/BorayVivek",
      linkedin: "https://www.linkedin.com/in/viveknboray/"
    },
    { 
      imageSrc: "https://media-exp1.licdn.com/dms/image/C4D03AQE6BUfv087Efw/profile-displayphoto-shrink_400_400/0/1621637474190?e=1647475200&v=beta&t=1gcOARFoBJm9W83Sq8Wyfebz1lJV0t11Zu-0XRz85vc",
      title: "Sasha Charlamagne",
      description: "Ignite",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/sashacharlemagne/"
    },
    { 
      imageSrc: "https://media-exp1.licdn.com/dms/image/C4E03AQFU0P0_FdOldw/profile-displayphoto-shrink_400_400/0/1583766535488?e=1647475200&v=beta&t=PYVxmN_Gm7A_LarzfWRFgGlj1KB0IHA1jPqrkcTdxrs",
      title: "Stephanie Foster",
      description: "XY Planning Network",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/stephaniefoster2/"
    },
    { 
      imageSrc: "https://media-exp1.licdn.com/dms/image/C5603AQHwAhn_k4FeBg/profile-displayphoto-shrink_400_400/0/1628706744368?e=1647475200&v=beta&t=W3D4OaDjojjjJ9WtSuckTyqb_FimdiIi-6NXXgypFys",
      title: "Kirsten Suddath",
      description: "Next Frontier Capital",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/suddath/"
    },
    { 
      imageSrc: "https://media-exp1.licdn.com/dms/image/C4D03AQGF3JvJt5i9Rw/profile-displayphoto-shrink_400_400/0/1516495666981?e=1647475200&v=beta&t=88IOnf_t5yn98i91fTko8rVJUAG-BiIAf327m94MH_k",
      title: "Sara Zervos",
      description: "The Pao App",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/sarajzervos/"
    },
    { 
      imageSrc: "https://media-exp1.licdn.com/dms/image/C4D03AQE6BUfv087Efw/profile-displayphoto-shrink_400_400/0/1621637474190?e=1647475200&v=beta&t=1gcOARFoBJm9W83Sq8Wyfebz1lJV0t11Zu-0XRz85vc",
      title: "Sasha Charlamagne",
      description: "Locus.sh",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/sashacharlemagne/"
    },
    { 
      imageSrc: "https://media-exp1.licdn.com/dms/image/C4E03AQHwxwBJAjrjDw/profile-displayphoto-shrink_400_400/0/1516185855867?e=1647475200&v=beta&t=f3TSMfcMPNS-9Wd67ivudPbNyzGRrdaaMyhAywXz6Zg",
      title: "Kevin Phillips",
      description: "RoadSync",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/kevin-phillips-157b6/"
    },
    { 
      imageSrc: null,
      title: "Jonathan Siskin",
      description: "Deluxe Corporation",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/jonathan-siskin/"
    },
    { 
      imageSrc: "https://media-exp1.licdn.com/dms/image/C5603AQEQG3dl5JEOng/profile-displayphoto-shrink_400_400/0/1516308276676?e=1647475200&v=beta&t=-tuzf26eQm8hOK9Am3zFJkWoKMke6oGPSaDWum-qNc4",
      title: "Richard Carrano",
      description: "Purchasing Power",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/richardcarrano/"
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
                    <SocialLink target="_blank" href={card.twitter}>
                        <TwitterIcon />
                    </SocialLink>
                    <SocialLink target="_blank" href={card.linkedin}>
                        <LinkedInIcon />
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
                    <SocialLink href={card.twitter}>
                        <TwitterIcon />
                    </SocialLink>
                    <SocialLink href={card.linkedin}>
                        <LinkedInIcon />
                    </SocialLink>
                    </SocialLinksContainer>
                </Card>
                </Column>
            ))}
        </ThreeColumnContainer>
    </Container>
  );
};