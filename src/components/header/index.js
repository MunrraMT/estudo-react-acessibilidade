import StyledHeader from './styles';

const Header = () => (
  <StyledHeader>
    <StyledHeader.SocialMedia href='https://www.linkedin.com/in/andr%C3%A9-rodrigues-86369544/'>
      <img
        width='50'
        height='50'
        src='/fontawesome/linkedin-brands.svg'
        alt='Logo do linkedin'
      />
    </StyledHeader.SocialMedia>
    <StyledHeader.Title>
      Estudo de acessibilidade com ReactJS usando Wai-Aria
    </StyledHeader.Title>
    <StyledHeader.SubTitle>
      Desenvolvido por <a href='https://github.com/MunrraMT'>André</a>
    </StyledHeader.SubTitle>
    <StyledHeader.SocialMedia href='https://github.com/MunrraMT'>
      <img
        width='50'
        height='50'
        src='/fontawesome/github-square-brands.svg'
        alt='Logo do github'
      />
    </StyledHeader.SocialMedia>
  </StyledHeader>
);

export default Header;
