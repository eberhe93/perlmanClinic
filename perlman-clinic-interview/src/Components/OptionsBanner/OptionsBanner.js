import React, { Component } from 'react';
import { styles } from '../../Modules/styles';
import { constants } from '../../Modules/contants';

const OptionsBanner = () =>  {
    return (
      <div style={styles.optionsBannerContainer}>
        <div
          style={styles.optionsBannerInnerContainer}
        >
          <h1 style={styles.bannerh1}>
            Contact Us
          </h1>
          <p style={styles.bannerParagraph}>
            {constants.banner.paragraph}
          </p>
        </div>
      </div>
    );
  }

export default OptionsBanner;
