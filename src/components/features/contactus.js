import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";
import defaultCardImage from "../../images/shield-icon.svg";
import SavingIcon from "../../images/piggy-bank-solid.svg";
import CreditIcon from "../../images/gauge-solid.svg";
import ResoucesIcon from "../../images/resource.png";
import { PrimaryButton } from "components/misc/Buttons";
import SingleCol from "components/faqs/SingleCol";


const Container = tw.div`relative bg-white`;


export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: CreditIcon,
      title: "Credit Improvement",
      description: "Defynance pays off your student loans so your credit score and debt-to-income ratio should improve right away."
    },
    { imageSrc: SavingIcon, 
      title: "Cash-Back",
      description: "A savings mechanism is built into each ISA that allows you to receive cash back at the end of the ISA term."
    },
    { imageSrc: ResoucesIcon,
      title: "Resources",
      description: "An ecosystme of career and life resources designed to optimize income so you get the most out of your potential."
    },
  ];

  return (
    <Container>
        <SingleCol />
    </Container>
  );
};