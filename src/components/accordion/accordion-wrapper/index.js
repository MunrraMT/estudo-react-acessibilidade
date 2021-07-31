import randomNumber from '../../../utils/random-number';
import AccordionItem from '../accordion-item';

const AccordionWrapper = ({ data }) => {
  const dataFormatted = data.map(({ question, response }, index) => (
    <AccordionItem
      question={question}
      response={response}
      key={randomNumber()}
      id={index}
    />
  ));

  return <section>{dataFormatted}</section>;
};

export default AccordionWrapper;
