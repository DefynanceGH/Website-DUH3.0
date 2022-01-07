import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "images/defynance-logo-alt.svg";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedInIcon } from "images/linkedin-icon.svg";
import { ReactComponent as InstagramIcon } from "images/instagram-icon.svg";

const Container = tw.div`relative border-solid border-primary-500 border-t-8 border-b-0 border-l-0 border-r-0 text-gray-500 -mx-8 -mb-8 px-8`;
const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-8`
const FiveColumns = tw.div`flex flex-wrap justify-between`;

const Column = tw.div`w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5`;

const ColumnHeading = tw.h5`font-bold uppercase text-primary-500`;

const LinkList = tw.ul`pl-0 text-sm font-medium list-none list-outside	`;
const LinkListItem = tw.li`mt-0`;
const Link = tw.p`text-primary-500 hocus:text-primary-100 hocus:border-gray-100 pb-1 transition duration-300 cursor-pointer`;

const LogoContainer = tw.div`flex items-center justify-center lg:justify-start`;
const LogoImg = tw.img`w-48`;


const SocialLinksContainer = tw.div`mt-4 text-center lg:text-left`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-500 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center`
const CopyrightNotice = tw.div`mx-auto text-primary-500`

const Divider = tw.div`my-8 border-b-2 border-gray-800`
export default () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <CompanyColumn>
            <LogoContainer>
              <LogoImg src={LogoImage} />
            </LogoContainer>
          </CompanyColumn>
          <Column>
            <ColumnHeading>Defynance</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Home Page</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Defynance ISA</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Investor</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">About</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Portal</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">My ISA</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Career Resources</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Investing</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Additional Links</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Contact Information</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Career Center</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">News and PR</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Blog</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
          <SocialLinksContainer>
          <ColumnHeading>Find Us Online</ColumnHeading>
              <SocialLink href="https://twitter.com">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="https://linkedin.com">
                <LinkedInIcon />
              </SocialLink>
              <SocialLink href="https://instagram.com">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href="https://facebook.com">
                <FacebookIcon />
              </SocialLink>
            </SocialLinksContainer>
          </Column>
        </FiveColumns>
        <Divider/>
        <CopyrightAndCompanyInfoRow>
          <CopyrightNotice>&copy; Copyright 2022.</CopyrightNotice>
        </CopyrightAndCompanyInfoRow>
      </Content>
    </Container>
  );
};
