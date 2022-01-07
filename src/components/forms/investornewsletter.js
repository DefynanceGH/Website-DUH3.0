import React from "react";
import tw from "twin.macro";
import {ReactComponent as EmailNewsletterIconBase } from "../../images/email-newsletter-icon.svg"
import {Container as ContainerBase } from "components/misc/Layouts.js"
import {SectionHeading, Subheading} from "components/misc/Headings.js";
import {PrimaryButton} from "components/misc/Buttons.js";


const Container = tw(ContainerBase)`bg-gray-100 -mx-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col lg:flex-row px-8`
const TextColumn = tw.div`flex items-center flex-col sm:flex-row`
const FormColumn = tw.div`mt-12 lg:mt-0 lg:ml-16 w-full sm:w-auto`

const EmailNewsletterIcon = tw(EmailNewsletterIconBase)`w-16 h-16 text-primary-500`
const HeadingInfoContainer = tw.div`sm:ml-6 mt-6 sm:mt-0`
const Heading = tw(SectionHeading)`text-primary-100 sm:text-left leading-none mb-4`
const Description = tw.p`text-primary-500 font-medium text-sm max-w-sm mt-2 sm:mt-1 text-center sm:text-left`

const Form = tw.form`text-sm text-primary-100 max-w-sm sm:max-w-none mx-auto`
const Input = tw.input`w-full sm:w-auto block sm:inline-block px-6 py-4 rounded bg-white tracking-wider font-bold border border-white focus:border-secondary-300 focus:outline-none sm:rounded-r-none hover:bg-white transition duration-300 text-gray-200`
const Button = tw(PrimaryButton)`w-full sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-4 bg-primary-100 text-gray-100 hocus:bg-primary-100 hocus:text-white border border-primary-100 hocus:border-primary-100`


export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <TextColumn>
            <EmailNewsletterIcon />
            <HeadingInfoContainer>
              <Subheading>Stay updated</Subheading>
              <Heading>Investor Updates</Heading>
              <Description>Sign up to receive our monthly update about our investor information and Defynance activities.</Description>
            </HeadingInfoContainer>
          </TextColumn>
          <FormColumn>
          <Form>
            <Input name="newsletter" type="email" placeholder="Your Email Address" />
            <Button type="submit">Subscribe!</Button>
          </Form>
          </FormColumn>
        </Row>
      </Content>
    </Container>
  );
};