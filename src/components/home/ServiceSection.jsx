import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { services, faqs } from "../data/siteData";
import serviceImg1 from "../../assets/img/bg/sec-shape-top.png";
import serviceImg2 from "../../assets/img/bg/sec-shape-bottom.png";
import servicebackground from "../../assets/img/bg/service-bg.png";
import chooseimg1 from "../../assets/img/normal/wcu_1-2.png";
import chooseimg2 from "../../assets/img/normal/wcu_1-1.png";
import chooseimg3 from "../../assets/img/icon/wcu-icon_1-1.svg";


const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="service-card">
      <div className="service-card_icon">
        <img src={icon} alt={title} />
      </div>
      <div className="service-card_content">
        <h4 className="service-card_title h5">
          <Link to="/services">{title}</Link>
        </h4>
        <p className="service-card_text">{text}</p>
        <Link to="/services" className="link-btn">
          Read More <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className={`accordion-card ${isOpen ? 'active' : ''}`}>
    <div className="accordion-header">
      <button 
        className={`accordion-button ${!isOpen ? 'collapsed' : ''}`}
        onClick={onClick}
      >
        {question}
      </button>
    </div>
    <div className={`accordion-collapse ${isOpen ? 'show' : ''}`}>
      <div className="accordion-body">
        <p className="faq-text">{answer}</p>
      </div>
    </div>
  </div>
);

const ServiceSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 3 } },
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div
      className="service-bg-area"
      style={{ backgroundImage: `url(${servicebackground})` }}
    >
      <div className="sec-shape-top">
        <img src={serviceImg1} alt="shape" />
      </div>

      <div className="service-area-1 space overflow-hidden">
        <div className="container">
          <div className="title-area">
            <span className="sub-title">Our Features</span>
            <h2 className="sec-title text-white">Services We're Offering</h2>
          </div>
        </div>
        <div className="container-fluid p-0">
          <Slider ref={sliderRef} {...settings} className="service-slider-1">
            {[...services, ...services].map((service, index) => (
              <div key={index} className="slide-item">
                <ServiceCard {...service} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="wcu-area-1 space-bottom">
        <div className="container">
          <div className="row">
            {/* Image Column */}
            <div className="col-lg-6">
              <div className="wcu-thumb">
                <img
                  className="img-1"
                  src={chooseimg1}
                  alt="Why choose us"
                />
                <div className="img-2 jump">
                  <img src={chooseimg2} alt="img" />
                </div>
                <div className="wcu-grid jump2">
                  <div className="icon">
                    <img src={chooseimg3} alt="icon" />
                  </div>
                  <div className="details">
                    <h3 className="wcu-grid_year">
                      <span className="counter-number">25</span>+
                    </h3>
                    <span className="wcu-grid_text">Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="col-lg-6">
              <div className="wcu-wrap">
                <div className="title-area mb-50">
                  <span className="sub-title">Why Choose Us?</span>
                  <h2 className="sec-title text-white">
                    Why Choose RJ Bodybuilder Training?
                  </h2>
                  <p className="sec-text text-white">
                    RJ doesn't believe in shortcuts or generic plans. Every
                    program is designed with intention focused on proper form,
                    progressive overload, and sustainable results.
                  </p>
                </div>

                <div className="accordion-area">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === index}
                      onClick={() =>
                        setOpenIndex(openIndex === index ? -1 : index)
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="sec-shape-bottom">
        <img src={serviceImg2} alt="shape" />
      </div>
    </div>
  );
};

export default ServiceSection;
