import { useState } from 'react';
import styled from 'styled-components';
import randomNumber from '../../../utils/random-number';
import AccordionItem from '../accordion-item';

const StyledAccordion = styled.section`
  border: 2px solid black;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  article {
    width: 100%;

    &:first-of-type h3 {
      border-top: none;
    }

    &:last-of-type {
      h3 {
        border-bottom: none;
      }

      section {
        border-top: 1px solid black;
      }
    }

    h3 {
      width: 100%;
      border-bottom: 1px solid black;
      border-top: 1px solid black;
      margin-bottom: -1px;
    }

    h3 button {
      width: 100%;
      border: none;
      background: none;
      padding: 1rem;
    }

    section {
      padding: 1rem;
      text-align: justify;
    }
  }
`;

const AccordionWrapper = ({ data }) => {
  const [actived, setActived] = useState(0);

  const dataFormatted = data.map(({ question, answer }, index) => (
    <AccordionItem
      question={question}
      answer={answer}
      key={randomNumber()}
      id={`accordion-item-${index}`}
      active={actived}
      activeClick={() => setActived(index)}
    />
  ));

  return <StyledAccordion>{dataFormatted}</StyledAccordion>;
};

export default AccordionWrapper;
