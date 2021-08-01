const AccordionItem = ({ question, answer, id, active, activeClick }) => {
  const showActived = () => {
    if (active === Number(id.slice(15))) return true;

    return false;
  };

  return (
    <article id={`question-${id}`}>
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
    </article>
  );
};

export default AccordionItem;
