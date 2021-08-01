import AccordionWrapper from './accordion-wrapper';

const Accordion = () => {
  const data = [
    {
      question: 'Qual o seu nome?',
      answer: 'André Rodrigues'
    },
    {
      question: 'Qual sua idade?',
      answer: '30 anos'
    },
    {
      question: 'Estou testando?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rerum natus at pariatur nostrum ea! Numquam ad illum itaque vel sit magni nobis aperiam neque? Rerum id sapiente corrupti molestias.'
    }
  ];

  return <AccordionWrapper data={data} />;
};

export default Accordion;
