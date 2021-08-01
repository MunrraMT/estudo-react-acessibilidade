import compareIDs from './logic/compare-ids';
import StyledAccordionItem from './styles';

const AccordionItem = ({ question, answer, id, active, activeClick }) => (
  <StyledAccordionItem show={compareIDs(active, id)}>
    <h3>
      <button
        id={`question-${id}`}
        onClick={activeClick}
        aria-expanded={compareIDs(active, id)}
        aria-controls={`answer-${id}`}
        type='button'
        tabIndex={0}
      >
        <p>{question}</p>
        {compareIDs(active, id) ? (
          <img
            width='15'
            height='15'
            src='/fontawesome/minus-solid.svg'
            alt='simibolo de aberto'
          />
        ) : (
          <img
            width='15'
            height='15'
            src='/fontawesome/plus-solid.svg'
            alt='simibolo de fechado'
          />
        )}
      </button>
    </h3>

    <section id={`answer-${id}`} aria-labelledby={`question-${id}`}>
      <p>{answer}</p>
    </section>
  </StyledAccordionItem>
);

export default AccordionItem;
