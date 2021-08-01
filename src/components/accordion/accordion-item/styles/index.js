import styled from 'styled-components';

const StyledAccordionItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    p {
      margin-right: 1rem;
    }
  }

  & button:focus {
    background-color: #ccc;
  }

  section {
    text-align: justify;
    padding: ${(props) => (props.show ? '1rem' : '0')};
    height: ${(props) => (props.show ? 'auto' : '0')};
    overflow: ${(props) => (props.show ? 'show' : 'hidden')};
  }

  &:last-of-type section {
    border-top: ${(props) => (props.show ? '1px solid black' : 'none')};
  }
`;

export default StyledAccordionItem;
