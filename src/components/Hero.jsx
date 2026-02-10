import React, { useEffect } from "react";
import "./Hero.css";
import Heroimg1 from "../assets/img/hero/hero_bg_1_1.png";
import Heroimg2 from "../assets/img/hero/hero_bg_1_2.png";
// import heroimg6 from "../assets/img/hero/hero_shape_1111.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  useEffect(() => {
    // Wait until jQuery + Slick are available, then initialise (or reuse) the slider
    const interval = setInterval(() => {
      const $ = window.jQuery;
      if (!$ || !$.fn || !$.fn.slick) return;

      const $slider = $("#heroSlider1");
      if (!$slider.length) return;

      // Avoid double-initialising if main.js or other code already did it
      if (!$slider.hasClass("slick-initialized")) {
        $slider.slick({
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // we use external custom arrows
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 1000,
          pauseOnHover: false,
        });
      }

      // Custom arrow controls (using hero-arrow buttons)
      $('[data-slick-prev="#heroSlider1"]')
        .off("click.hero")
        .on("click.hero", function (e) {
          e.preventDefault();
          $slider.slick("slickPrev");
        });

      $('[data-slick-next="#heroSlider1"]')
        .off("click.hero")
        .on("click.hero", function (e) {
          e.preventDefault();
          $slider.slick("slickNext");
        });

      clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Area */}
      <div className="hero-wrapper hero-1" id="hero">
        <div className="global-carousel" id="heroSlider1">
          {/* Hero Slider 01 */}
          <div className="hero-slider">
            <div
              className="hero-bg"
              style={{
                backgroundImage: `url(${Heroimg1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1,
              }}
            ></div>
            <div
              className="hero-shape1 shape-mockup movingX"
              data-bottom="165px"
              data-right="0"
            >
              {/* <img src={heroimg6} alt="img" /> */}
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-9">
                  <div className="hero-style1">
                    <span
                      className="hero-subtitle"
                      data-ani="slideinup"
                      data-ani-delay="0s"
                    >
                      WELCOME TO RJ BODYBUILDER TRAINING
                    </span>
                    <h1
                      className="hero-title text-white"
                      data-ani="slideinup"
                      data-ani-delay="0.1s"
                    >
                      Transform Your Body. <span>Build Real Strength.</span>
                    </h1>
                    <div
                      className="btn-group"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      <a href="#" className="btn style2">
                        Make Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Slider 02 */}
          <div className="hero-slider">
            <div
              className="hero-bg"
              style={{
                backgroundImage: `url(${Heroimg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1,
              }}
            ></div>
            <div
              className="hero-shape1 shape-mockup movingX"
              data-bottom="165px"
              data-right="0"
            >
              {/* <img src={heroimg6} alt="img" /> */}
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-9">
                  <div className="hero-style1">
                    <span
                      className="hero-subtitle"
                      data-ani="slideinup"
                      data-ani-delay="0s"
                    >
                      ELITE PERSONAL TRAINING & BODYBUILDING COACHING
                    </span>
                    <h1
                      className="hero-title text-white"
                      data-ani="slideinup"
                      data-ani-delay="0.1s"
                    >
                      Customized Programs. <span>Real Results.</span>
                    </h1>
                    <div
                      className="btn-group"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      <a href="#" className="btn style2">
                        Make Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Arrow */}
        <div className="hero-arrow">
          <button
            data-slick-prev="#heroSlider1"
            className="slick-arrow slick-prev"
          >
            PREV
          </button>
          <button
            data-slick-next="#heroSlider1"
            className="slick-arrow slick-next"
          >
            NEXT
          </button>
        </div>
      </div>
      {/* Hero Section End */}
    </>
  );
};

export default Hero;
