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

const Faq = ({
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
    title: 'FAQs',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
      id='faq'
    >
      <br/>
      <hr/>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

          <div class='container'>
  <div class="accordion">
    <div class="accordion__single">
      <input class="accordion__single__hidden" type="checkbox" id="question-one"/>
      <label class="accordion__single__question" for="question-one">What is Sports Fantasy?</label>
      <p class="accordion__single__answer">
      Sports Fantasy is just what the name implies- it is a virtual genre of sports decentralised application that hinges on fantasy-based selections of what you can predict and ask.</p>
    </div>
    <div class="accordion__single">
      <input class="accordion__single__hidden" type="checkbox" id="question-two"/>
      <label class="accordion__single__question" for="question-two">Why play on SportsDapp?</label>
      <p class="accordion__single__answer">
      Fantasy Cricket is as much a skill-based sport as is Cricket itself. Online players, irrespective of their respective proficiency levels, are thus advised to play only on a safe and trusted online gaming portal that respects their passion and skills for the game.       </p>
    </div>
    <div class="accordion__single">
      <input class="accordion__single__hidden" type="checkbox" id="question-three"/>
      <label class="accordion__single__question" for="question-three">Legal Safe & Secure</label>
      <p class="accordion__single__answer">
      It offers a transparent window where you can see how your game is taking you from one stage to another. The (Hon.) Supreme Court of India acknowledges and approves of all Games of Skill, and several High Courts have approved Fantasy Gaming as a game of skill. A consistent element of skill is required to attain a certain outcome in every such virtual game and this can result only from a profound understanding of the game.      </p>
    </div>
    <div class="accordion__single">
      <input class="accordion__single__hidden" type="checkbox" id="question-four"/>
      <label class="accordion__single__question" for="question-four">Verified Submissions</label>
      <p class="accordion__single__answer">
        All the transactions on SportsDapp are done on blockchain which can be validated using timestamps. It assures that the winners actually plays the game before the result & there is no fake submissions.
      </p>
    </div>
  </div>
</div>


          </div>
        </div>
      </div>



    </section>
  );
}


export default Faq;
