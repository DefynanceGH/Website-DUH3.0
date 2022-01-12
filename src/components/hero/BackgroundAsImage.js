import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const Container = styled.div`
  ${tw`relative sm:mx-8 lg:mx-0 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1534568292380-49954e6859e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1787&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 px-4 flex justify-between items-center flex-col lg:flex-row`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Notification = tw.span`inline-block w-3/4 my-4 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-xl leading-none`;

const PrimaryAction = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`text-center text-white no-underline rounded bg-primary-600 mx-2 inline-block mb-10 text-sm font-semibold hocus:bg-white hocus:text-primary-600 focus:shadow-outline
  `}
`

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <TwoColumn>
          <RightColumn>
            <StyledResponsiveVideoEmbed
              url="https://player.vimeo.com/video/665372217"
              background="transparent"
            />
          </RightColumn>
          <RightColumn>
            <Heading>
              <span>Defy </span>
              <br />
              <span>Student</span>
              <br/>
              <span>Loan debt</span>
            </Heading>
            <Notification>A NEW innovative solution to refinancing student loans</Notification>
            <br />
          </RightColumn>
        </TwoColumn>
        <div tw="flex">
            <div tw="mx-auto">
              <PrimaryAction tw="hocus:bg-white hocus:text-primary-500" target="_blank" href="http://portal.defynance.com/">Get an ISA Quote</PrimaryAction>
              <PrimaryAction tw="bg-white border-solid border-primary-600 text-primary-600 hocus:bg-white hocus:text-primary-500" href="#consumerprotections">How will an ISA help me</PrimaryAction>
            </div>
        </div>
      </HeroContainer>
    </Container>
  );
};
