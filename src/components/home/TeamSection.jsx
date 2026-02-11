import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaTwitter, FaLinkedinIn, FaDiscord } from 'react-icons/fa';
import { team } from '../data/siteData';



const TeamCard = ({ name, role, image }) => (
  <div className="team-card">
    <div className="team-card_img">
      <img src={image} alt={name} />
    </div>
    <div className="team-card_content">
      <h4 className="team-card_title">
        <Link to="/team">{name}</Link>
      </h4>
      <span className="team-card_desig">{role}</span>
      <div className="social-btn">
        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        <a href="https://www.discord.com/" target="_blank" rel="noreferrer"><FaDiscord /></a>
      </div>
    </div>
  </div>
);

const TeamSection = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 4 } },
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="team-area-1 space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Our Trainer</span>
          <h2 className="sec-title">Meet Our Amazing Team</h2>
        </div>
        <Slider ref={sliderRef} {...settings} className="team-slider-1">
          {[...team, ...team].map((member, index) => (
            <div key={index} className="slide-item">
              <TeamCard {...member} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamSection;
