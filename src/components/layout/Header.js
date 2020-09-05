import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.addEventListener('click', clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <nav style ={{marginBottom:0, backgroundColor:'#171a1c'}} class="fixed-top navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" href="#"><Logo/></a>
  <button  style ={{marginBottom:0}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span style ={{marginBottom:0}} class="navbar-toggler-icon"></span>
  </button>

  <div style ={{marginBottom:0}} class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul  style ={{marginBottom:0}} class="navbar-nav mr-auto">

    </ul>

    <ul  style ={{marginBottom:0, paddingRight:'2rem'}} class="navbar-nav">
    <li class="nav-link"><a href="#about">About</a></li>
    <li class="nav-link"><a href="#howtoplay">How to play</a></li>
    <li class="nav-link"><a href="#roadmap">Roadmap</a></li>
    <li class="nav-link"><a href="#download">Download</a></li>
    </ul>

  </div>
</nav>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
