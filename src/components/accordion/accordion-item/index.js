import styled from 'styled-components';

const StyledAccordionItem = styled.article`
  section {
    padding: ${(props) => (props.show ? '1rem' : '0')};
    text-align: justify;
    height: ${(props) => (props.show ? 'auto' : '0')};
    overflow-y: ${(props) => (props.show ? 'show' : 'hidden')};
  }

  &:last-of-type section {
    border-top: ${(props) => (props.show ? '1px solid black' : 'none')};
  }
`;

const AccordionItem = ({ question, answer, id, active, activeClick }) => {
  const showActived = () => {
    if (active === Number(id.slice(15))) return true;

    return false;
  };

  return (
    <StyledAccordionItem show={showActived} id={`question-${id}`}>
      <h3>
        <button
          onClick={activeClick}
          aria-expanded={showActived()}
          aria-controls={`answer-${id}`}
          type='button'
        >
          {question}{' '}
          {showActived() ? (
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

      {showActived() ? (
        <section id={`answer-${id}`} aria-labelledby={`question-${id}`}>
          <p>{answer}</p>
        </section>
      ) : null}
    </StyledAccordionItem>
  );
};

export default AccordionItem;
