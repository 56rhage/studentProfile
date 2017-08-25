import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import { omit } from 'lodash';

class ImageCarousel extends Component {
  renderImages() {
    const { images } = this.props;
    const galleryImages = [];
    images.map((image) => {
      galleryImages.push(
        <div key={image}>
          <img alt={''} src={image} />
        </div>
      );
    });
    return galleryImages;
  }

  render() {
    return (
      <Carousel
        {...omit(this.props, ['images'])}
      >{this.renderImages()}</Carousel>
    );
  }
}

ImageCarousel.propTypes = {
  ...Carousel.propTypes,
  images: PropTypes.array.isRequired
};

export default ImageCarousel;
