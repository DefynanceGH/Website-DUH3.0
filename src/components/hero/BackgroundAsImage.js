import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const Container = styled.div`
  ${tw`relative sm:mx-8 lg:mx-0 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`text-center text-white no-underline rounded bg-primary-500 mx-2 inline-block mb-10 text-sm font-semibold hocus:bg-white hocus:text-primary-600 focus:shadow-outline
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
          <LeftColumn>
            <Heading>
              <span>Defy </span>
              <br />
              <SlantedBackground> Student loan</SlantedBackground>
              <br/>
              <span> debt</span>
            </Heading>
            <Notification>A NEW innovative solution to refinancing student loans</Notification>
            <br />
            <div tw="flex justify-between">
              <PrimaryAction tw="hocus:bg-white hocus:text-primary-500" target="_blank" href="http://portal.defynance.com/">Get an ISA Quote</PrimaryAction>
              <PrimaryAction tw="hocus:bg-white hocus:text-primary-500" href="#consumerprotections">How will an ISA help me</PrimaryAction>
            </div>
          </LeftColumn>
          <RightColumn>
            <StyledResponsiveVideoEmbed
              url="https://www.youtube.com/embed/fluviCuspdI"
              background="transparent"
            />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
