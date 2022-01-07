import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import Header, { NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../components/headers/light.js";
import styled from "styled-components";
import SimpleContactUs from "components/forms/SimpleContactUs.js";
import SimpleSubscribeNewsletter from "components/forms/SimpleSubscribeNewsletter.js";
import FiveColumnDark from "components/footers/FiveColumnDark.js";
import light from "../components/headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`py-4 px-40 max-w-none `}
  ${DesktopNavLinks}, ${LogoLink} {
    ${tw`mx-4 text-primary-500 hover:border-gray-300 hover:text-gray-300`}
  }
  ${PrimaryLink} {
    ${tw`bg-primary-400 hover:bg-primary-500`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-12 lg:my-0 text-white
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-white hocus:border-solid hocus:border-t-0 hocus:border-r-0 hocus:border-l-0 cursor-pointer
`;

const navLinks = [
  <NavLinks key={1}>
    <PrimaryLink href="/#">
      Sign in
    </PrimaryLink>
  </NavLinks>
];

export default () => (
  <AnimationRevealPage>
    <StyledHeader links={navLinks}/>
    <NavLinks tw="p-6 pl-48 mb-8 bg-primary-100 w-full">
      <PrimaryLink tw="bg-primary-600 mr-48 hover:bg-primary-500 hocus:cursor-pointer">Get an ISA Quote</PrimaryLink>
      <NavLink>Defynance ISA</NavLink>
      <NavLink>Resources</NavLink>
      <NavLink>Investors</NavLink>
      <NavLink>About Us</NavLink>
    </NavLinks>
    <Hero />
    <MainFeature />
    <Features />
    <MainFeature2 />
    <Portfolio />
    <ContactUsForm />
    <SimpleSubscribeNewsletter />
    <FiveColumnDark />
  </AnimationRevealPage>
);
