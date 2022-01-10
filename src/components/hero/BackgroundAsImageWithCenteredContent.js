import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${PrimaryLink} {
    ${tw`bg-primary-400 hover:bg-primary-500`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1541795026038-ad7b16c874e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1451&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 my-0 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;


const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw(NavLinks)`
lg:mx-2
px-8 py-3 rounded text-gray-100 bg-primary-600
hocus:bg-primary-500 hocus:text-gray-200 focus:shadow-outline
border-b-0 cursor-pointer
`;


export default () => {
  const navLinks = [
    <NavLinks key={2}>
      <PrimaryLink >
        Get an ISA Quote
      </PrimaryLink>
    </NavLinks>,
    <NavLinks key={1}>
      <NavLink href="#">
        Defynance ISA
      </NavLink>
      <NavLink href="#">
        Resources
      </NavLink>
      <NavLink href="#">
        Investors
      </NavLink>
      <NavLink href="#">
        About Us
      </NavLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <TwoColumn>
          <LeftColumn tw="my-32">
            <Heading>
              <span>Social Impact Investing </span>
            </Heading>
            <Notification>A NEW innovative solution to refinancing student loans</Notification>
            <br />
            <PrimaryAction>Visit the ISA Credit Fund site</PrimaryAction>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};