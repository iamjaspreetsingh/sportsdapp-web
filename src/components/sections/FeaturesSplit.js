import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '3 Simple Steps',
    paragraph: 'To Play The Game'
  };

  return (
    <section
      {...props}
      className={outerClasses}
      id='howtoplay'
    >
      <br/>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Step-1
                  </div>
                <h3 className="mt-0 mb-12">
                  Choose the match
                </h3>
                <p className="m-0">
                  You can play upcoming as well as live matches. Click on the match you want to play.
                </p>
              </div>
              <div style={{alignSelf:'center'}} className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item" >
              <div >

              <Image
                  src={require('./../../assets/images/a.png')}
                  alt="Features split 01"
                  width={528}
                  height={396}
                  />
                </div>

              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Step-2
                  </div>
                <h3 className="mt-0 mb-12">
                  Choose Question you know
                  </h3>
                <p className="m-0">
                  Click on any question to answer them. Both general & user created questions exist. The participation fee for questions vary & therefore the rewards. You can also create your own custom question by clicking on bottom right plus button.
                  </p>
              </div>
              <div style={{alignSelf:'center'}} className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/c.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Step-3
                  </div>
                <h3 className="mt-0 mb-12">
                  Strategise & Answer
                  </h3>
                <p className="m-0">
                  Choose the best possible option you think of. You can also check the live scenarios of which option is voted most. The more the option is voted the lesser reward it holds if it is correct.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                style={{alignSelf:'center'}}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/d.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>



    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
