import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { store } from 'react-notifications-component';
import {NotificationContainer, NotificationManager} from 'react-notifications';


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Download = ({
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
    title: 'Download',
    paragraph: ''
  };

  const showNotification=()=>{

    NotificationManager.success('Success message', 'Title here');

  }

  return (
    <section id= 'download'
      {...props}
      className={outerClasses}
    >
      <br/>
       <br/>
       <br/>
       <hr/>

      <div  className="container">
        <div className={innerClasses}>
       
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

          <div  style = {{backgroundColor:'#151719'}}class="card-deck text-white ">
<div style = {{textAlign:'center'}} class="card bg-dark text-white ">
  <img style={{width:'100%', paddingLeft:'25%', paddingRight:'25%', paddingTop:'15%', paddingBottom:'5%'}} class="card-img-top" src={require('./../../assets/images/QR.jpeg')} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Scan the QR Code <br/>to Get app</h5>
  </div>
</div>
<div style = {{alignSelf:'center',textAlign:'center'}} class="card bg-dark text-white">
<div class="w3-container w3-light-grey w3-padding-32 w3-padding-large" id="contact">
                      <div class="w3-content">

                        <iframe name="hidden_iframe" id="hidden_iframe" style={{display:"none"}} onload={()=>showNotification()}></iframe>

                        <form action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdSsYa3lodvY9cvjlpi0eng3pJEcQwD5iWBZqQsfZHtKVVQZQ/formResponse" method="post" target="hidden_iframe" onsubmit={()=>{showNotification()}}>



                          <div class="w3-section">

                            <input class="w3-input w3-border" type="text" placeholder="Email" id="email" required name="entry.994813272"/>
                          </div>

                          <div class="w3-section">
                            <button class="w3-button w3-block w3-black w3-margin-bottom" type="submit">Get App</button>
                          </div>
                        </form>
                      </div>
                    </div>

  <div class="bg-dark text-white card-body">
    <h5 class="card-title">Enter your email id to get app link via email</h5>
  </div>
</div>
<div style = {{textAlign:'center'}} class="card bg-dark text-white ">
<a style={{paddingTop:'4rem'}} href='/src/assets/app-debug.apk' download>
    <div class="image-top"><i class="fa fa-android fa-5x"></i></div>
  </a>
  <div class="card-body">
    <h5 style={{paddingTop:'2rem'}}class="card-title">Click on the icon to download android app</h5>
  </div>
</div>
</div>
          </div>
        </div>
      </div>



    </section>
  );
}

export default Download;