import AccordionItem from '../components/accordion/accordion-item';
import Header from '../components/header';

const HomePage = () => (
  <>
    <Header />
    <main>
      <AccordionItem quest='Qual seu nome?' response='André Rodrigues' />
      <AccordionItem quest='Qual sua idade?' response='30 anos' />
    </main>
  </>
);

export default HomePage;
