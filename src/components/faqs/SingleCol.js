import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const Subheading = tw(SubheadingBase)`text-center`;
const Heading = tw(SectionHeading)`w-full text-primary-100`;
const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;
const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const PrimaryAction = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`px-4 py-2 text-white no-underline rounded bg-primary-500 mx-auto border-solid border-primary-500 inline-block mb-10 text-sm font-semibold hocus:bg-gray-200 hocus:text-primary-600 focus:shadow-outline
  `}
`

export default ({
  subheading = "Learn more",
  heading = "Frequently Asked Questions",
  faqs = [
    {
      question: "What is a defynance ISA?",
      answer:
        "An Income Share Agreement (ISA) is an innovative funding method where a person contractually agrees to share a percent of their income with an ISA investor for a set payment term in exchange for an amount of financing up front. For example, a person may agree to share 4% of their income for 10 years in exchange for $15,000 financing.  As a funding model, ISAs are a more fair alternative to loans."
    },
    {
      question: "How do I know if Defynance is right for me ?",
      answer:
        "An ISA could be a useful financing method for anyone as a socially responsible alternative to loans. If you are looking for a better financing method with built-in downside protections, an ISA is right for you.  If you are not a fan of compounding interest that adds to your hardship or debt producing loans then an ISA is an ideal solution.  Most importantly, an ISA is a balanced financing method that protects you and rewards the investor for empowering you to realize your potential without the potentially crippling burden of debt."
    },
    {
      question: "What is the minimum credit score to apply ?",
      answer:
        "We do not have a minimum required credit score to apply for our ISA refinancing program. While credit score is a factor, we use forward looking indicators that predict future earning potential, instead of just backward looking indicators such as a credit score."
    },
    {
      question: "Is there a prepayment option with an ISA ?",
      answer:
        "Yes, there is a prepayment option with an ISA.  Someone can either prepay whenever they are able to or if their income substantially increases, the ISA may end early if the payment cap is reached prior to the payment term expiring.  This makes ISAs an excellent option even for those who expect their income to rise faster than originally expected."
    }
  ]
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <Subheading tw="text-lg">Still have questions? Let's talk.</Subheading>
      <div tw="flex"><PrimaryAction target="_blank" href="https://defynance.com/blog/">Schedule a meeting</PrimaryAction></div>
    </Container>
  );
};
