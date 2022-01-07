import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as BulletIcon} from 'images/checkbox-circle.svg'

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left inline`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`text-center md:text-left font-medium text-secondary-100`;



const Bullet = styled(BulletIcon)(props => [
  tw`w-10 h-10 text-green-100 `
]);

export default ({
  subheading = "Empower Financial Freedom",
  heading = (
    <>
      <span tw="text-primary-100">The Defynance ISA</span>
    </>
  ),
  description = (
    <>
      <div tw="justify-center">
        <Bullet tw=""/>
        <h2 tw=" inline-block">Interest-free Refinancing</h2>
      </div>
      <div tw="justify-center">
        <Bullet/>
        <h2 tw="inline-block">Affordable Payments</h2>
      </div>
      <div tw="justify-center">
        <Bullet/>
        <h2 tw="inline-block">Cash-back Savings</h2>
      </div>
    </>
  ),
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://timerse.com",
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const defaultStatistics = [
    {
      key: "Clients",
      value: "2282+"
    },
    {
      key: "Projects",
      value: "3891+"
    },
    {
      key: "Awards",
      value: "1000+"
    }
  ];

  if (!statistics) statistics = defaultStatistics;

  return (
    <Container>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
      <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
          </TextContent>
        </TextColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <h2 tw="mt-32" >How it works</h2>
            <p tw="text-lg">Defynance will pay off your current student loans. In exchange, you will agree to provide a fixed percentage of your fuiture income over a defined number of payments of your choice.</p>
            <p tw="text-lg">Congratulations! You are now free of student loan debt. At the end of the Defynance ISA, you will receive a cash-back reward to enjoy your financial freedom.</p>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
