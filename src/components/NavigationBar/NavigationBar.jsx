import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavWrapper, Logo, LogoWrapper } from './styles';
import SearchInput from './SearchInput/SearchInput';
import { ReactComponent as Glassess } from '../../assets/glasses.svg';
import MyWatchListButton from '../Watchlist/MyWatchListButton/MyWatchListButton';

const NavigationBar = () => (
  <Nav>
    <NavWrapper>
      <Link to="/">
        <LogoWrapper>
          <Glassess />
          <Logo>TheMovieGeek</Logo>
        </LogoWrapper>
      </Link>
      <SearchInput />
      <MyWatchListButton />
    </NavWrapper>
  </Nav>
);

export default NavigationBar;
