import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";

const Container = tw.div`relative bg-gray-200`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap mx-32`;
const Column = tw.div`mt-0 text-center`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;



const Card = styled.div`
  ${tw`flex px-6 py-8 rounded-lg mx-2`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-2 flex-shrink-0 relative`}
    img {
      ${tw`w-20 h-20`}
    }
  }

  .textContainer {
    ${tw`my-auto mx-16 text-left`}
  }

  .title {
    ${tw`font-bold text-xl leading-none text-primary-600`}
  }

  .title2 {
    ${tw`font-bold text-xl text-white border-solid border-primary-500 bg-primary-500 p-6 rounded-full`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;


export default ({
  subheading = "How it Works",
  heading = <>Getting a Defynance ISA</>,

}) => {
  const blogPosts = [
    {
      title: "Request a FREE Quote",
      description: "Provide some information about your current situation and we will use our propriatary alogrithm to find some ISA options that work for you.",
      url: "https://reddit.com"
    },
    {
      title: "Apply for a Defynance ISA",
      description: "Once you have chosen the best quote option, fill out an online application and provide verification documents.",
      url: "https://timerse.com"
    },
    {
      title: "Get Approved",
      description: "Our underwriting and risk team will review your application and ensure all qualifications have been met. ",
      url: "https://timerse.com"
    },
    {
      title: "Student Loans are Paid Off",
      description: "With your approval, we will pay off your student loans. You no longer have to worry about interest or loss of income.",
      url: "https://timerse.com"
    },
    {
      title: "Affordable ISA Payments",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://timerse.com"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle tw="text-primary-100 my-0">{heading}</HeadingTitle>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((card, index) => (
            <Column key={index}>
            <Card >
              <span className="imageContainer">
                <h1 className="title2 ml-24">{index + 1}</h1>
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
        </ThreeColumn>
      </Content>
    </Container>
  );
};
