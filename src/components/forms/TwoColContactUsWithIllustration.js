import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { NavLinks } from "../headers/light.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";


const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 `;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);


const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`font-semibold text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const PrimaryAction = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw` text-white no-underline rounded bg-primary-600 mx-auto inline-block mb-10 text-sm font-semibold hocus:bg-primary-500 hocus:text-white focus:shadow-outline
  `}
`

export default ({
  subheading = "CONTACT US",
  heading = <>Still have questions?</>,
  description = <><span tw="font-bold text-black">You don’t have to fight your student debt battle alone. Defynance is your partner and we are here to help.</span><br/><span tw="text-sm text-black">If you can’t find the information you are searching for, please visit our FAQ page or contact us. </span></>,
  textOnLeft = true,
}) => {


  return (
    <Container>
      <TwoColumn>
        <TextColumn tw="m-auto block">
            <PrimaryAction href="/faqs"tw="w-96 my-6 text-center">View FAQ</PrimaryAction>
            <PrimaryAction href="/contact"tw="w-96 border-solid hocus:bg-primary-500 hocus:text-white my-6 text-center bg-white text-primary-600" tw="w-96 text-center">Contact Us</PrimaryAction>
        </TextColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading tw="font-bold text-primary-100">{heading}</Heading>
            <Description>{description}</Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
