import styled from 'styled-components';

const StyledAccordion = styled.section`
  border: 2px solid black;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  article {
    width: 100%;

    &:first-of-type h3 {
      border-top: none;
    }

    &:last-of-type {
      h3 {
        border-bottom: none;
      }
    }

    h3 {
      width: 100%;
      border-bottom: 1px solid black;
      border-top: 1px solid black;
      margin-bottom: -1px;
    }

    h3 button {
      width: 100%;
      border: none;
      background: none;
      padding: 1rem;
    }
  }
`;

export default StyledAccordion;
