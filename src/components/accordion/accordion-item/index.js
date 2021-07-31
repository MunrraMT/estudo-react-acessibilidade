import { useState } from 'react';

const AccordionItem = ({ quest, response, id }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (expanded === true) setExpanded(false);
    if (expanded === false) setExpanded(true);
  };

  return (
    <article key={`accordion-${id}`}>
      <h3>
        <button
          onClick={handleClick}
          id={`question-${id}`}
          aria-expanded={expanded}
          aria-controls={`response-${id}`}
          type='button'
        >
          {quest}{' '}
          {!expanded ? (
            <img
              width='15'
              height='15'
              src='/fontawesome/plus-solid.svg'
              alt='simibolo de fechado'
            />
          ) : (
            <img
              width='15'
              height='15'
              src='/fontawesome/minus-solid.svg'
              alt='simibolo de aberto'
            />
          )}
        </button>
      </h3>

      <section id={`response-${id}`} aria-labelledby={`question-${id}`}>
        {expanded ? <p>{response}</p> : null}
      </section>
    </article>
  );
};

export default AccordionItem;
