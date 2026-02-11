import { FaCheck, FaCheckCircle } from 'react-icons/fa';
import pricingbg from '../../assets/img/bg/pricing-card1-bg.png';
import pricingIcon1 from '../../assets/img/icon/picing-icon_1-1.svg';
import pricingIcon2 from '../../assets/img/icon/picing-icon_1-2.svg';
import pricingIcon3 from '../../assets/img/icon/picing-icon_1-3.svg';


const PricingSection = () => {
  return (
    <>
      {/* Pricing plan Area */}
      <div className="pricing-area">
        <div className="container">
          <div className="title-area text-center">
            <h3 className="sub-title">Pricing Plan</h3>
            <h2 className="sec-title">Our Pricing Plan</h2>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card">
                <div className="pricing-card_bg">
                  <img src={pricingbg} alt="img" />
                </div>
                <div className="pricing-card_icon">
                  <img src={pricingIcon1} alt="img" />
                </div>
                <h3 className="pricing-card_title">Basic Membership</h3>
                <h4 className="pricing-card_price">
                  <span className="currency">$</span>19<span className="duration">
                    /month</span>
                </h4>
                <p className="pricing-card_content">
                  This category typically offers access to the gym's facilities
                  and equipment.
                </p>
                <div className="checklist">
                  <ul>
                    <li><i className="far fa-check-circle"></i>12 trainings</li>
                    <li>
                      <i className="far fa-check-circle"></i>Free shower & lockers
                    </li>
                    <li><i className="far fa-check-circle"></i>Personal yoga mat</li>
                    <li><i className="far fa-check-circle"></i>Free parking</li>
                  </ul>
                </div>
                <a className="btn style2" href="#">Choose This Plan</a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-card pricing-card_active">
                <div className="pricing-card_bg">
                  <img src={pricingbg} alt="img" />
                </div>
                <div className="pricing-card_icon">
                  <img src={pricingIcon2} alt="img" />
                </div>
                <h3 className="pricing-card_title">Standard Membeship</h3>
                <h4 className="pricing-card_price">
                  <span className="currency">$</span>39<span className="duration">
                    /month</span>
                </h4>
                <p className="pricing-card_content">
                  This category typically offers access to the gym's facilities
                  and equipment.
                </p>
                <div className="checklist">
                  <ul>
                    <li><i className="far fa-check-circle"></i>12 trainings</li>
                    <li>
                      <i className="far fa-check-circle"></i>Free shower & lockers
                    </li>
                    <li><i className="far fa-check-circle"></i>Personal yoga mat</li>
                    <li><i className="far fa-check-circle"></i>Free parking</li>
                  </ul>
                </div>
                <a className="btn style2" href="#">Choose This Plan</a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-card">
                <div className="pricing-card_bg">
                  <img src={pricingbg} alt="img" />
                </div>
                <div className="pricing-card_icon">
                  <img src={pricingIcon3} alt="img" />
                </div>
                <h3 className="pricing-card_title">Ultimate Membership</h3>
                <h4 className="pricing-card_price">
                  <span className="currency">$</span>69<span className="duration">
                    /month</span>
                </h4>
                <p className="pricing-card_content">
                  This category typically offers access to the gym's facilities
                  and equipment.
                </p>
                <div className="checklist">
                  <ul>
                    <li><i className="far fa-check-circle"></i>12 trainings</li>
                    <li>
                      <i className="far fa-check-circle"></i>Free shower & lockers
                    </li>
                    <li><i className="far fa-check-circle"></i>Personal yoga mat</li>
                    <li><i className="far fa-check-circle"></i>Free parking</li>
                  </ul>
                </div>
                <a className="btn style2" href="#">Choose This Plan</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingSection;