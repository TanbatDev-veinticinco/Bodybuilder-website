import { useState, useRef } from 'react';
import Slider from 'react-slick';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import testibg from '../../assets/img/testimonial/testi_bg1.png';
import testiimg1 from '../../assets/img/testimonial/testi_box-bg.png';
import testi1 from '../../assets/img/testimonial/testi_1_1.png';
import testi2 from '../../assets/img/testimonial/testi_1_2.png';
import testi3 from '../../assets/img/testimonial/testi_1_3.png';


const TestimonialSection = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="testimonial-area-1 overflow-hidden">
      <div className="testimonial-bg-thumb1">
        <div className="thumb">
          <img src={testibg} alt="img" />
        </div>
      </div>
      <div className="space">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-8 col-lg-9">
              <div
                className="testi-box-wrap1 text-center"
                style={{ backgroundImage: `url(${testiimg1})` }}
              >
                <div className="title-area">
                  <span className="sub-title">Feedbacks</span>
                  <h2 className="sec-title text-white">Trusted Testimonials</h2>
                </div>
                
                <Slider ref={sliderRef} {...settings} className="testi-slider-1">
                  <div className="col-lg-6">
                    <div className="testi-box">
                      <div className="testi-box_thumb">
                        <img
                          src={testi1}
                          alt="img"
                        />
                        <div className="block-quote">
                          <i className="fas fa-quote-right"></i>
                        </div>
                      </div>
                      <div className="testi-box_content">
                        <p className="testi-box_text">
                          "Training with RJ completely changed how I approach
                          fitness. He doesn't just give workouts he explains the
                          purpose behind every movement and makes sure my form
                          is solid. My strength....."
                        </p>
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-6">
                    <div className="testi-box">
                      <div className="testi-box_thumb">
                        <img
                          src={testi2}
                          alt="img"
                        />
                        <div className="block-quote">
                          <i className="fas fa-quote-right"></i>
                        </div>
                      </div>
                      <div className="testi-box_content">
                        <p className="testi-box_text">
                          "RJ is hands down the best trainer I've worked with.
                          Every session is focused, efficient, and
                          results-driven. There's no wasted time, just smart
                          programming and real accountability. I've seen ....."
                        </p>
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-6">
                    <div className="testi-box">
                      <div className="testi-box_thumb">
                        <img
                          src={testi3}
                          alt="img"
                        />
                        <div className="block-quote">
                          <i className="fas fa-quote-right"></i>
                        </div>
                      </div>
                      <div className="testi-box_content">
                        <p className="testi-box_text">
                          "What sets RJ apart is his attention to detail. He
                          corrects form, prevents injuries, and actually cares
                          about long-term progress. I feel stronger, more
                          confident, and safer in the gym than ever ....."
                        </p>
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
                
                <div className="testi-slider-controller">
                  <button 
                    className={`indicatior-btn ${currentSlide === 0 ? 'active' : ''}`}
                    onClick={() => sliderRef.current?.slickGoTo(0)}
                  >
                    <div className="testi-box_profile">
                      <h4 className="testi-box_name">Andrew Daniel</h4>
                      <span className="testi-box_desig">Gym Student</span>
                    </div>
                  </button>
                  <button 
                    className={`indicatior-btn ${currentSlide === 1 ? 'active' : ''}`}
                    onClick={() => sliderRef.current?.slickGoTo(1)}
                  >
                    <div className="testi-box_profile">
                      <h4 className="testi-box_name">Mike Harison</h4>
                      <span className="testi-box_desig">Gym Student</span>
                    </div>
                  </button>
                  <button 
                    className={`indicatior-btn ${currentSlide === 2 ? 'active' : ''}`}
                    onClick={() => sliderRef.current?.slickGoTo(2)}
                  >
                    <div className="testi-box_profile">
                      <h4 className="testi-box_name">William Henry</h4>
                      <span className="testi-box_desig">Gym Student</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;