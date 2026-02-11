// import React from 'react';
import ServiceSec1 from "../../assets/img/icon/service-icon_2-1.svg";
import ServiceSec2 from "../../assets/img/icon/service-icon_2-2.svg";
import ServiceSec3 from "../../assets/img/icon/service-icon_2-3.svg";
import ServiceSec4 from "../../assets/img/icon/service-icon_2-1.svg";
import ServiceSec5 from "../../assets/img/icon/service-icon_2-2.svg";
import ServiceSec6 from "../../assets/img/icon/service-icon_2-3.svg";
// import '../../assets/js/main.js';

const ServiceSec = () => {
  return (
    <div>
      {/* Service Area 02 */}
      <div className="service-area-2 space overflow-hidden">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Our Services</span>
            <h2 className="sec-title">Service We Provide</h2>
          </div>
        </div>
        <div className="container">
          <div
            className="row global-carousel service-slider-2 slider-shadow"
            data-slide-show="3"
            data-ml-slide-show="3"
            data-lg-slide-show="3"
            data-md-slide-show="2"
            data-sm-slide-show="1"
            data-xs-slide-show="1"
            data-dots="false"
          >
            <div className="col-lg-4 col-md-6">
              <div className="service-card style2">
                <div className="service-card_icon">
                  <img src={ServiceSec1} alt="img" />
                </div>
                <div className="service-card_content">
                  <h4 className="service-card_title h5">
                    <a href="#">Gym Fitness Class</a>
                  </h4>
                  <p className="service-card_text">
                    High-intensity workouts that alternate between intense bursts
                    of exercise and short recovery periods...
                  </p>
                  <a href="#" className="link-btn" tabIndex="0">
                    <i className="fas fa-arrow-right"></i> Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card style2">
                <div className="service-card_icon">
                  <img src={ServiceSec2} alt="img" />
                </div>
                <div className="service-card_content">
                  <h4 className="service-card_title h5">
                    <a href="#">Power Lifting</a>
                  </h4>
                  <p className="service-card_text">
                    High-intensity workouts that alternate between intense bursts
                    of exercise and short recovery periods...
                  </p>
                  <a href="#" className="link-btn" tabIndex="0">
                    <i className="fas fa-arrow-right"></i> Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card style2">
                <div className="service-card_icon">
                  <img src={ServiceSec3} alt="img" />
                </div>
                <div className="service-card_content">
                  <h4 className="service-card_title h5">
                    <a href="#">Body Building</a>
                  </h4>
                  <p className="service-card_text">
                    High-intensity workouts that alternate between intense bursts
                    of exercise and short recovery periods...
                  </p>
                  <a href="#" className="link-btn" tabIndex="0">
                    <i className="fas fa-arrow-right"></i> Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card style2">
                <div className="service-card_icon">
                  <img src={ServiceSec4} alt="img" />
                </div>
                <div className="service-card_content">
                  <h4 className="service-card_title h5">
                    <a href="#">Gym Fitness Class</a>
                  </h4>
                  <p className="service-card_text">
                    High-intensity workouts that alternate between intense bursts
                    of exercise and short recovery periods...
                  </p>
                  <a href="#" className="link-btn" tabIndex="0">
                    <i className="fas fa-arrow-right"></i> Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card style2">
                <div className="service-card_icon">
                  <img src={ServiceSec5} alt="img" />
                </div>
                <div className="service-card_content">
                  <h4 className="service-card_title h5">
                    <a href="#">Power Lifting</a>
                  </h4>
                  <p className="service-card_text">
                    High-intensity workouts that alternate between intense bursts
                    of exercise and short recovery periods...
                  </p>
                  <a href="#" className="link-btn" tabIndex="0">
                    <i className="fas fa-arrow-right"></i> Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card style2">
                <div className="service-card_icon">
                  <img src={ServiceSec6} alt="img" />
                </div>
                <div className="service-card_content">
                  <h4 className="service-card_title h5">
                    <a href="#">Body Building</a>
                  </h4>
                  <p className="service-card_text">
                    High-intensity workouts that alternate between intense bursts
                    of exercise and short recovery periods...
                  </p>
                  <a href="#" className="link-btn" tabIndex="0">
                    <i className="fas fa-arrow-right"></i> Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSec;