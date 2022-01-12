import React from "react";
import tw from "twin.macro";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import {SectionHeading} from "components/misc/Headings.js";
import {PrimaryButton} from "components/misc/Buttons.js";


const Container = tw(ContainerBase)`bg-gray-100 -mx-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col lg:flex-row`
const TextColumn = tw.div`flex items-center text-center flex-col sm:flex-row`
const FormColumn = tw.div`mt-12 lg:mt-0 w-full sm:w-auto`

const HeadingInfoContainer = tw.div`sm:ml-6 mt-6 sm:mt-0`
const Heading = tw(SectionHeading)`text-primary-100 font-bold mt-0 text-center`

const Form = tw.form`text-sm text-primary-100 max-w-sm sm:max-w-none mx-auto`
const Input = tw.input`w-full mx-4 my-4 sm:w-auto block sm:inline-block px-6 py-4 rounded bg-white tracking-wider font-bold border border-white focus:border-secondary-300 focus:outline-none sm:rounded-r-none hover:bg-white transition duration-300 text-primary-500`
const Button = tw(PrimaryButton)`w-full sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-4 bg-primary-100 text-gray-100 hocus:bg-primary-100 hocus:text-white border border-primary-100 hocus:border-primary-100`
const Subheading = tw.h5`font-semibold text-black`
const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-black`;


export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <TextColumn>
            <HeadingInfoContainer>
              <Subheading tw="font-semibold">STAY UPDATED</Subheading>
              <Heading tw="font-bold">Newsletter Subscription</Heading>
              <SectionDescription>Sign up to receive our weekly newsletter with helpful information about financial freedom.</SectionDescription>
            </HeadingInfoContainer>
          </TextColumn>
        </Row>
        <Row><FormColumn>
          <Form action='https://forms.zohopublic.com/murzzysr/form/NewsletterSubscription/formperma/l7mtYtPiZp-Kg5377wg3f0b0PkoObktUZL7TuAnS8bg/htmlRecords/submit' method="POST">
            <Input name="Name_First" type="text" placeholder="Your Name" />
            <Input name="Name_Last" type="text" placeholder="Your Last Name" />
            <Input name="Email" type="email" placeholder="Your Email Address" />
            <Button type="submit">Subscribe!</Button>
          </Form>
          </FormColumn>
        </Row>
      </Content>
    </Container>
  );
};
