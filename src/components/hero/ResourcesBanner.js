import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { NavLink, NavLinks, PrimaryLink } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1561740890-37f9921eb9cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;


const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw(NavLink)`
lg:mx-2
px-8 py-3 rounded text-gray-100 bg-primary-600
hocus:bg-primary-500 hocus:text-gray-200 focus:shadow-outline
border-b-0 cursor-pointer no-underline
`;

export default () => {

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              <span tw="text-primary-100">R</span><span>ESOURCES FOR</span>
              <br />
              <span tw="text-primary-100">O</span><span>PTIMIZING</span>
              <br/>
              <span tw="text-primary-100">E</span><span>ARNING</span>
              <br />
              <span tw="text-primary-100">P</span><span>OTENTIAL</span>
            </Heading>
            <Notification tw="block my-0">FREE Defynance Account.</Notification>
            <Notification tw="block my-0">FREE Resources for Improvement.</Notification>
            <br />
            <PrimaryAction target="_blank" href="http://portal.defynance.com/signup">Create an Account</PrimaryAction>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};