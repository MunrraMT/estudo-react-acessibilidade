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
          {expanded ? (
            <span>
              <i className='fas fa-angle-right' />
            </span>
          ) : (
            <span>
              <i className='fas fa-angle-right' />
            </span>
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
