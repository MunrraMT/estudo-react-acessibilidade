import styled from 'styled-components';

const HeaderSocialMedia = styled.a`
  font-size: 3rem;
  cursor: pointer;
  color: #000000;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: blue;
  }

  &:first-of-type {
    grid-column: 1/2;
    grid-row: 1/3;
  }

  &:last-of-type {
    grid-column: 3/4;
    grid-row: 1/3;
  }
`;

export default HeaderSocialMedia;
