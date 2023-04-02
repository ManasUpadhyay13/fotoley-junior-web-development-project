import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [intervalId, setIntervalId] = useState()


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const startAnimatioin = () => {
    var temp = setInterval(() => {
      setIntervalId(intervalId => temp)
      setCurrent(current => current === length - 1 ? 0 : current + 1);
      console.log(intervalId, current);
    }, 2000)
  }

  const stopAnimatioin = () => {
    console.log(intervalId);
    clearInterval(intervalId)
    console.log(intervalId);
  }



  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <>
                {slide.position === "left" && (
                  <>
                    <p>{slide.text}</p>
                    <img src={slide.image} alt='travel image' className='image' />
                  </>
                )}
                {slide.position === "right" && (
                  <>
                    <img src={slide.image} alt='travel image' className='image' />
                    <p>{slide.text}</p>
                  </>
                )}
              </>
            )}
          </div>
        );
      })}
      <div className="animateButton">

        <i className='bx bx-play'
          onClick={() => {
            startAnimatioin()
          }}>
          <span>Play</span>
        </i>


        <i className='bx bx-pause'
          onClick={() => {
            stopAnimatioin()
          }} >
          <span>Pause</span>
        </i>
      </div>
    </section>
  );
};

export default ImageSlider;
