import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { NavLinks } from "../headers/light.js";

const Container = tw.div`relative bg-primary-600`;
const TwoColumn = tw.div`flex flex-col w-3/4 md:flex-row justify-between max-w-screen-xl mx-auto `;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);


const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-white text-center md:text-left font-thin text-sm`;
const Heading = tw(SectionHeading)`my-0 pt-2 w-full text-center text-white font-bold`;

const Description = tw.a`no-underline text-yellow-200 mt-4 text-center hocus:text-yellow-100 hocus:cursor-pointer md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed`

export default () => {


  return (
    <Container>
        <Heading><p tw="text-white text-base mb-0 font-thin">PRESS CENTER</p>Defynance in the News</Heading>
      <TwoColumn>
        <TextColumn >
            <TextContent>
                <Description target="_blank" href="https://www.83degreesmedia.com/innovationnews/startup-takes-on-student-loan-crisis-030519.aspx">“Defynance: Tampa startup takes on student loan crisis”</Description>
                <Subheading tw="text-right">83 Degrees Media</Subheading>
            </TextContent>
        </TextColumn>
        <TextColumn>
            <TextContent  tw="text-right">
                <Description target="_blank" href="https://stpetecatalyst.com/redperits-defynance-is-out-to-disrupt-the-student-loan-market/">“RedPerit’s Defynance is out to disrupt the student loan market”</Description>
                <Subheading tw="text-right">St. Pete Catalyst</Subheading>
            </TextContent>
        </TextColumn>
      </TwoColumn>
      <TwoColumn>
        <TextColumn >
            <TextContent>
                <Description target="_blank" href="https://www.embarccollective.com/featured-founder-farrukh-siddiqui-of-defynance/">“Featured Founder: Farrukh Siddiqui of Defynance”</Description>
                <Subheading tw="text-right">Embarc Collective</Subheading>
            </TextContent>
        </TextColumn>
        <TextColumn>
            <TextContent  tw="text-right">
                <Description target="_blank" href="https://www.morganstanley.com/ideas/carla-harris-student-debt-access-and-opportunity-podcast">“The Snowball Effect of Student Debt”</Description>
                <Subheading tw="text-right">Morgan Stanley</Subheading>
            </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};