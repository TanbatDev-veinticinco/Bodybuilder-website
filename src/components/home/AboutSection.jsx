import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneVolume } from 'react-icons/fa';
import { aboutTabs, contactInfo } from '../data/siteData';
import aboutimg1 from '../../assets/img/normal/about_1-1.png';
import aboutimg2 from '../../assets/img/normal/about_1-2.png';
import aboutIcon from '../../assets/img/icon/about-icon.svg';
// import './AboutSection.css';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const activeContent = aboutTabs.find(tab => tab.id === activeTab);

  return (
    <div className="space-bottom">
      <div className="container">
        <div className="row">
          {/* Image Column */}
          <div className="col-lg-6">
            <div className="about-thumb">
              <img className="about-img-1" src={aboutimg1} alt="About" />
              <img className="about-img-2 jump" src={aboutimg2} alt="About" />
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-6">
            <div className="about-content-wrap">
              <div className="title-area mb-0">
                <span className="sub-title">More About Us</span>
                <h2 className="sec-title">
                  Unlock Your Full Potential. Achieve Your Best Physique.
                </h2>
                <p className="sec-text">
                  RJ Bodybuilder Training is built on one principle: <strong>results that last</strong>. 
                  RJ is a professional personal trainer and bodybuilding coach with a proven track record 
                  of transforming physiques through customized training, smart nutrition, and proper technique.
                  <br /><br />
                  Whether your goal is muscle growth, fat loss, strength development, or overall body 
                  recomposition, RJ provides hands-on coaching and accountability every step of the way.
                </p>

                {/* Tabs */}
                <div className="about-tab-1">
                  <div className="filter-menu-active">
                    {aboutTabs.map(tab => (
                      <button 
                        key={tab.id}
                        className={activeTab === tab.id ? 'active' : ''}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        {tab.title}
                      </button>
                    ))}
                  </div>
                  <div className="filter-content">
                    <div className="filter-item">
                      <div className="about-tab-icon">
                        <img src={aboutIcon} alt="icon" />
                      </div>
                      <p className="about-tab-text">{activeContent?.content}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="btn-wrap mt-40">
                <Link to="/contact" className="btn">Make Appointment</Link>
                <div className="about-info-wrap">
                  <div className="icon"><FaPhoneVolume /></div>
                  <div className="details">
                    <p className="about-info-title">Need Help?</p>
                    <a className="about-info-link" href={`tel:${contactInfo.phone}`}>
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
