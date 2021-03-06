import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const CtaTopHeader = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'CtaTopHeader section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'CtaTopHeader-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'CtaTopHeader-split'
  );

  return (
    <section
      {...props}
      className={outerClasses} style={{backgroundColor:'#004d00'}}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <br/>
          <div className="CtaTopHeader-action" style={{backgroundColor:'#004d00', width:'100%', padding:'10px', color:'white', textAlign:'center'}}>
          We will be releasing beta test version (android) on 25th October! Stay tuned!
          </div>
        </div>
      </div>
    </section>
  );
}


export default CtaTopHeader;
