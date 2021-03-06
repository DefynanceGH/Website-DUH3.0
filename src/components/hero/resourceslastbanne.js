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
  background-image: url("https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`p-8 bg-black flex flex-col items-center lg:block`;

const Heading = styled.h1`
  ${tw`text-lg text-left lg:text-left sm:text-lg lg:text-lg xl:text-lg font-bold text-gray-100 leading-none my-0 w-2/4`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Notification = tw.span`inline-block w-3/4 my-4 py-1 text-gray-100 border-l-4 border-blue-500 font-normal text-base`;

const PrimaryAction = tw(NavLink)`
px-4 py-2 rounded text-primary-600 bg-white border-solid border-primary-600
hocus:bg-gray-100 hocus:text-primary-600 focus:shadow-outline cursor-pointer no-underline mx-0
`;

export default () => {

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <TwoColumn>
          <LeftColumn>
            <Heading tw="mr-0">
              <span tw="text-yellow-100">Is it time for a raise?</span>
            </Heading>
            <Notification >Find career resources to learn new skills or even start your own business.</Notification>
            <br />
            <br />
            <PrimaryAction target="_blank" href="http://portal.defynance.com/signup">View Resources</PrimaryAction>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};