import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { heroSlides } from '../data/siteData';

// Slick carousel CSS (required for react-slick)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroSlide = ({ background, subtitle, title, highlight, buttonText, buttonLink }) => {
  return (
    <div className="hero-slider" style={{ backgroundImage: `url(${background})` }}>
      {/* Animated Shape */}
      <div className="hero-shape1 movingX">
        {/* <img src="/assets/img/hero/hero_shape_1.png" alt="decoration" /> */}
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="hero-style1">
              <span className="hero-subtitle animate-slideinup">{subtitle}</span>
              <h1 className="hero-title animate-slideinup delay-1">
                {title} <span>{highlight}</span>
              </h1>
              <div className="btn-group animate-slideinup delay-2">
                <Link to={buttonLink} className="btn style2">{buttonText}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    pauseOnHover: false,
    cssEase: 'linear'
  };

  return (
    <div className="hero-wrapper hero-1" id="hero">
      <Slider ref={sliderRef} {...settings}>
        {heroSlides.map((slide) => (
          <HeroSlide key={slide.id} {...slide} />
        ))}
      </Slider>
      
      {/* Custom Navigation */}
      <div className="hero-arrow">
        <button 
          className="slick-arrow slick-prev"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          PREV
        </button>
        <button 
          className="slick-arrow slick-next"
          onClick={() => sliderRef.current?.slickNext()}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
