import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { NavLinks } from "../headers/light.js";

const Container = tw.div`relative bg-primary-600`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto pb-8`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);


const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-white text-center md:text-left font-semibold`;
const Heading = tw(SectionHeading)`text-white mt-4 font-bold text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`text-yellow-100 mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-normal`

const PrimaryAction = tw(NavLinks)`
lg:mx-2
px-8 py-3 rounded text-primary-600 font-bold bg-white
hocus:bg-gray-100 hocus:text-primary-600 focus:shadow-outline
border-b-0 cursor-pointer
`;

export default ({
  subheading = "MAKE A POSITIVE IMPACT",
  heading = <>Become a Partner</>,
  description = <><span>Join Defynance and become a force for good. We are always expanding our ecosystem of resources to bring postive change. If you’re ready to join the movement, we’re waiting for you.</span></>,
  textOnLeft = true,
}) => {


  return (
    <Container>
      <TwoColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
          </TextContent>
        </TextColumn>
        <TextColumn tw="m-auto flex">
            <PrimaryAction tw="w-2/4 my-6 mx-auto text-center">Partnership Request</PrimaryAction>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
