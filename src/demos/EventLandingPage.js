import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Header, { NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../components/headers/light.js";
import styled from "styled-components";
import InvestorNewsletter from "components/forms/investornewsletter";
import FiveColumnDark from "components/footers/FiveColumnDark.js";
import { Link } from "react-router-dom";

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
      <PrimaryLink tw="bg-primary-600 mr-48 hover:bg-primary-500 hocus:cursor-pointer no-underline" target="_blank" href="http://portal.defynance.com/">Get an ISA Quote</PrimaryLink>
      <NavLink><Link tw="no-underline text-white" to="/">Defynance ISA</Link></NavLink>
      <NavLink><Link tw="no-underline text-white" to="/resources">Resources</Link></NavLink>
      <NavLink><Link tw="no-underline text-white" to="/investors">Investors</Link></NavLink>
      <NavLink><Link tw="no-underline text-white" to="/about">About Us</Link></NavLink>
    </NavLinks>
    <Hero />
    <InvestorNewsletter />
    <FiveColumnDark />
  </AnimationRevealPage>
);
