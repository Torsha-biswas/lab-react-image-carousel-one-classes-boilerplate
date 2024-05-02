import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
  }

  handleClickPrev() {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + images.length) % images.length
    }));
  }

  handleClickNext() {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % images.length
    }));
  }

  render() {
    const currentImage = images[this.state.currentIndex];
    return (
      <div className="carousel">
        <ArrowBackIosIcon className="arrow" onClick={this.handleClickPrev} />
        <div className="image-container">
          <img src={currentImage.img} alt={currentImage.title} className="image" />
          <div className="image-text">
            <h2>{currentImage.title}</h2>
            <p>{currentImage.subtitle}</p>
          </div>
        </div>
        <ArrowForwardIosIcon className="arrow" onClick={this.handleClickNext} />
      </div>
    );
  }
}

export default Carousel;