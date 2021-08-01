import styled from 'styled-components';
import Accordion from '../components/accordion';
import Header from '../components/header';

const StyledMain = styled.main`
  padding: 1rem;
`;

const HomePage = () => (
  <>
    <Header />
    <StyledMain>
      <Accordion />
    </StyledMain>
  </>
);

export default HomePage;
