import AccordionItem from '../components/accordion/accordion-item';
import Header from '../components/header';
import randomNumber from '../utils/random-number';

const HomePage = () => (
  <>
    <Header />
    <main>
      <AccordionItem
        quest='Qual seu nome?'
        response='André Rodrigues'
        id={randomNumber()}
      />
      <AccordionItem
        quest='Qual sua idade?'
        response='30 anos'
        id={randomNumber()}
      />
    </main>
  </>
);

export default HomePage;
