import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );
  const sectionHeader = {
    title: 'Contact us: info@sportsdapp.co',
    paragraph: 'Terms & Conditions'
  };
  
  return (
    <>

<br/>
<br/>
<br/>
<hr/>
<br/>



 <footer id='joinus' class="page-footer font-small special-color-dark pt-4">

  <div class="container">

    <ul class="list-unstyled list-inline text-center">
      <li style = {{paddingRight:'1rem'}} class="list-inline-item">
        <a href="https://www.facebook.com/sportsdapp1" class="btn-floating btn-fb mx-1">
          <i class="fa fa-facebook-f fa"> </i>
        </a>
      </li>
      <li style = {{paddingRight:'1rem'}} class="list-inline-item">
        <a href= "https://twitter.com/sports_dapp" class="btn-floating btn-tw mx-1">
          <i class="fa fa-twitter fa"> </i>
        </a>
      </li>
      <li style = {{paddingRight:'1rem'}} class="list-inline-item">
        <a href="https://www.linkedin.com/company/sportsdapp" class="btn-floating btn-li mx-1">
          <i class="fa fa-linkedin fa"> </i>
        </a>
      </li>
      <li style = {{paddingRight:'1rem'}} class="list-inline-item">
        <a href="https://t.me/sportsdapp" class="btn-floating btn-dribbble mx-1">
          <i class="fa fa-telegram"> </i>
        </a>
      </li>
      <li style = {{paddingRight:'1rem'}} class="list-inline-item">
        <a href="https://www.youtube.com/channel/UCk_6Nw3itl3QxiSYQCTGmGA" class="btn-floating btn-dribbble mx-1">
          <i class="fa fa-youtube"> </i>
        </a>
      </li>
    </ul>

  </div>

  <SectionHeader data={sectionHeader} className="center-content" />

  {/* <div style= {{float:'left', marginLeft:'3rem'}} class="footer-copyright text-right py-3">
    <h6>
</h6>
  </div> */}

  <div style= {{float:'right', marginRight:'3rem'}}class="footer-copyright text-left py-3">
    Copyright © 2020 SportsDapp. All Rights Reserved.
  </div>



</footer>
    </>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
