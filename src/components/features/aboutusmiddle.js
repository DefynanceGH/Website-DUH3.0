import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { NavLinks } from "../headers/light.js";

const Container = tw.div`relative bg-primary-500`;
const TwoColumn = tw.div`flex flex-col w-3/4 md:flex-row justify-between max-w-screen-xl mx-auto `;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);


const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-white text-center md:text-left`;
const Heading = tw(SectionHeading)`my-0 pt-12 w-full text-center text-white`;

const Description = tw.p`text-white mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed`

export default ({
  subheading = "Make a positive impact",
  heading = <>Become a Partner</>,
  description = <></>,
  textOnLeft = true,
}) => {


  return (
    <Container>
        <Heading><p tw="text-white text-base">Press center</p>Defynance in the News</Heading>
      <TwoColumn>
        <TextColumn >
            <TextContent>
                <Description>“Defynance: Tampa startup takes on student loan crisis”</Description>
                <Subheading>83 Degrees Media</Subheading>
            </TextContent>
        </TextColumn>
        <TextColumn>
            <TextContent  tw="text-right">
                <Description>“RedPerit’s Defynance is out to disrupt the student loan market”</Description>
                <Subheading>St. Pete Catalyst</Subheading>
            </TextContent>
        </TextColumn>
      </TwoColumn>
      <TwoColumn>
        <TextColumn >
            <TextContent>
                <Description>“Featured Founder: Farrukh Siddiqui of Defynance”</Description>
                <Subheading>Embarc Collective</Subheading>
            </TextContent>
        </TextColumn>
        <TextColumn>
            <TextContent  tw="text-right">
                <Description>“The Snowball Effect of Student Debt”</Description>
                <Subheading>Morgan Stanley</Subheading>
            </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};