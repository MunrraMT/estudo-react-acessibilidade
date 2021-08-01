import { useState } from 'react';
import randomNumber from '../../../utils/random-number';
import AccordionItem from '../accordion-item';
import StyledAccordion from './styles';

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
