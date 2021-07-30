const AccordionItem = ({ quest, response, expanded = false }) => (
  <article>
    <h3>
      <button
        id={`question-${quest}`}
        aria-expanded={expanded}
        aria-controls={`response-${quest}`}
        type='button'
      >
        {quest}{' '}
        <span>
          {expanded ? (
            <i className='fas fa-angle-right' />
          ) : (
            <i className='fas fa-angle-right' />
          )}
        </span>
      </button>
    </h3>

    <section id={`response-${quest}`} aria-labelledby={`question-${quest}`}>
      <p>{response}</p>
    </section>
  </article>
);

export default AccordionItem;
