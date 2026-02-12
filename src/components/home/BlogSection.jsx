import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaCalendarAlt, FaArrowRight, FaArrowLeft, FaUser } from 'react-icons/fa';
import { blogPosts } from '../data/siteData';

const BlogCard = ({ title, image, date, author, excerpt }) => (
  <div className="blog-card">
    <div className="blog-card_img">
      <img src={image} alt={title} />
    </div>
    <div className="blog-card_content">
      <div className="blog-card_meta">
        <span><FaCalendarAlt /> {date}</span>
        <span><FaUser /> By {author}</span>
      </div>
      <h4 className="blog-card_title">
        <Link to="/blog">{title}</Link>
      </h4>
      <p className="blog-card_text">{excerpt}</p>
      <Link to="/blog" className="link-btn">
        Read More <FaArrowRight />
      </Link>
    </div>
  </div>
);

const BlogSection = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="blog-area-1 space">
      <div className="container">
        <div className="title-wrap">
          <div className="title-area">
            <span className="sub-title">Our Blogs</span>
            <h2 className="sec-title">Articles & Tips</h2>
          </div>
          <div className="blog-arrows">
            <button onClick={() => sliderRef.current?.slickPrev()} className="arrow-btn">
              <FaArrowLeft />
            </button>
            <button onClick={() => sliderRef.current?.slickNext()} className="arrow-btn">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings} className="blog-slider">
          {blogPosts.map((post) => (
            <div key={post.id} className="slide-item">
              <BlogCard {...post} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogSection;
