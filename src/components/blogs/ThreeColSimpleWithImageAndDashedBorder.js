import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import  { NavLinks } from "../headers/light.js";

const Container = tw.div`relative bg-gray-200`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;

const Card = tw.div`bg-white lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);
const Heading = tw(SectionHeading)`my-0  w-full font-bold text-left text-primary-100`;
const Details = tw.div`p-6 rounded rounded-t-none flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`mt-2 font-thin text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0 mb-8`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 mb-0 leading-snug font-bold text-lg text-primary-600`;
const Description = tw.p`mt-2 text-sm text-black font-medium`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold no-underline hocus:bg-primary-500`}
`
const PrimaryAction = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`px-10 py-2 text-primary-600 no-underline rounded bg-white mx-auto border-solid border-primary-600 inline-block mt-10 text-sm font-semibold hocus:bg-gray-200 hocus:text-primary-600 focus:shadow-outline
  `}
`


export default () => {
  const blogPosts = [
    {
      imageSrc:
        "https://i2.wp.com/defynance.com/wp-content/uploads/2022/01/image-7.png?resize=1024%2C576&ssl=1",
      postdate: "January 3, 2022",
      title: "How to stick to your financial goals in 2022",
      description: <>Firstly, wishing all our readers and friends out there a glorious and peaceful 2022 from Team Defynance!
      <br />
      <br />
      2020 began with COVID-19, the traces of which were quite evident in 2021. Since 2020, we have learned our ways with covid and are determined to not just survive but also thrive as humans. The world continues to conduct business and research, provide education and medicare facilities, travel and celebrations as we gradually conduct our lives meanwhile accepting the existence of this virus.</>,
      url: "https://defynance.com/how-to-stick-to-your-financial-goals-in-2022/"
    },
    {
      imageSrc:
        "https://i2.wp.com/defynance.com/wp-content/uploads/2021/12/image-5-2.png?resize=1024%2C576&ssl=1",
      postdate: "December 27, 2021",
      title: "Why is student debt a social issue?",
      description: <>We can agree that not all loans are bad from a financial point of view. In fact, getting a loan can improve your credit score as long as you repay it in a timely manner.
      <br />
      <br />
      On the other hand, the pros and cons of a loan vary depending upon the type of loan. For example, a home loan is beneficial as it lets you purchase an asset whose value appreciates as time passes. On the contrary, an auto loan suffers from a not-so-favorable opinion; as any vehicle depreciates over time, and the interest paid on the loan ultimately adds to the cost.</>,
      url: "https://defynance.com/why-is-student-debt-a-social-issue/"
    },
    {
      imageSrc: "https://i2.wp.com/defynance.com/wp-content/uploads/2021/12/image-4.png?resize=1024%2C576&ssl=1",
      postdate: "December 20, 2021",
      title: "Student Loan Repayments Are Starting Soon: How To Prepare",
      description: <>As this year comes to an end, numerous individuals across the country are engulfed by the big question of student loan repayments.
      <br />
      <br />
      <br />
      Though the Biden administration has expanded the student loan forgiveness to those who are in public service or working for non-profit organizations for a minimum of 10 years, the number of individuals benefiting from such relaxations is a very small percentage of the total number of loan holders.</>,
      url: "https://defynance.com/student-loan-repayments-are-starting-soon-how-to-prepare/"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <Heading><p tw="text-black text-base font-semibold my-0">ARTICLES AND NEWS</p>The Defynance Blog</Heading>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <Title>{post.title}</Title>
                  <MetaContainer>
                    <Meta>
                      <div>{post.postdate}</div>
                    </Meta>
                  </MetaContainer>
                  <Description>{post.description}</Description>
                  <Link target="_blank" href={post.url}>Continue Reading</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
        <div tw="flex"><PrimaryAction target="_blank" href="https://defynance.com/blog/">View all blog posts</PrimaryAction></div>
      </Content>
    </Container>
  );
};
