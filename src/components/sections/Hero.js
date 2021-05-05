import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >

      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content mobile-view-margined-header">
          <div style={{backgroundColor:'#09553f', marginTop:'1rem', padding:'9px', color:'white', textAlign:'center'}}>
          We will be releasing beta test version (android) very soon! Stay tuned!
          </div>

            <h1 style = {{paddingTop:'2rem'}} className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Sports Fantasy app on <span className="text-color-primary">blockchain</span>
            </h1>
            <div className="container-xs">
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                  One Stop Platform for sports lovers to predict & strategise on upcoming match events.
                </p>
               <br/>
              <div className="reveal-from-bottom" data-reveal-delay="300">
                <ButtonGroup>
                  <a style={{backgroundColor:"#09553f", color:"white"}} class="nav-link" wideMobile href="#download">
                     Test the app
                    </a>
                  {/* <Button tag="a" color="dark" wideMobile href="https://github.com/iamjaspreetsingh/">
                    Join Referral Programme
                    </Button> */}
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://www.youtube.com/embed/DW7sMIkkeSc"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/scr.png')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/embed/DW7sMIkkeSc"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
