import React from 'react';
import { FooterArea, FooterWrapper, Text, LinkIcon } from './styles';
import { ReactComponent as LinkedinLogo } from '../../assets/linkedin-icon.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-icon.svg';

const Footer = () => (
  <FooterArea>
    <FooterWrapper>
      <Text>
        Coded with <span>&#10084;&#65039;</span>by{' '}
        <a href="https://github.com/augustojs1/the-movie-geek">Augusto Souza</a>
      </Text>
      <div>
        <LinkIcon href="https://www.linkedin.com/in/augustojs1/">
          <LinkedinLogo />
        </LinkIcon>
        <LinkIcon href="https://github.com/augustojs1">
          <GithubIcon />
        </LinkIcon>
      </div>
    </FooterWrapper>
  </FooterArea>
);

export default Footer;
