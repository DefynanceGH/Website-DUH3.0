import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container as ContainerBase, Content2Xl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import defynanceLogo from "images/defynance-logo-alt.svg";

const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-white text-primary-500`;
const ContentWithVerticalPadding = tw.div`py-4 lg:py-4`;
const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row px-24`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(SectionHeading)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight font-bold text-black`;
const Description = tw(SectionDescription)`font-bold mt-4 w-3/4 text-black lg:text-xl m-auto lg:mx-0 leading-none	`;
const PrimaryButton = tw(PrimaryButtonBase)`no-underline font-semibold mt-8 text-sm sm:text-lg px-10 py-3 bg-primary-600 inline-block hocus:bg-primary-500`;
const Image = tw.img`w-128 ml-auto`

export default ({
  heading = "WELCOME TO DEFYNANCE",
  description = <><span>Let’s #DefyDebt together.</span><br /><br />
  Defynance is a impact fintech with a vision to integrate social responsibility within financial services</>,
  primaryButtonText = "Get an ISA Quote",
  primaryButtonUrl = "http://portal.defynance.com/",
  imageSrc = defynanceLogo,
}) => {
  return (
    <PrimaryBackgroundContainer>
      <Content2Xl>
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
                <PrimaryButton target="_blank" as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
              </TextColumn>
              <IllustrationColumn>
                <Image src={imageSrc} />
              </IllustrationColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container>
      </Content2Xl>
    </PrimaryBackgroundContainer>
  );
};
