import styled from 'styled-components';
import HeaderSocialMedia from './header-social-media';
import HeaderSubTitle from './header-sub-title';
import HeaderTitle from './header-title';

const StyledHeader = styled.header`
  width: 100vw;

  background-color: #ccc;
  font-family: sans-serif;
  padding: 1rem;

  display: grid;
  grid-template-columns: 3rem auto 3rem;

  & h1 {
    grid-column: 2/3;
    grid-row: 1/2;
  }

  & h2 {
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;

StyledHeader.Title = HeaderTitle;
StyledHeader.SubTitle = HeaderSubTitle;
StyledHeader.SocialMedia = HeaderSocialMedia;

export default StyledHeader;
